const { spawn } = require('child_process');

module.exports = {
  blocks: {
    dot: {
      process(block) {
        const { bin, args } = this.config.get('pluginsConfig.dot');
        const dot = spawn(bin, ['-Tsvg', ...args]);

        return new Promise((resolve, reject) => {
          let svg = '';

          dot.stdout.on('data', buffer => {
            svg += buffer.toString();
          });

          dot.once('exit', code => {
            if (code == 0) {
              resolve(svg);
            } else {
              reject(new Error(`DOT conversion failed with exit code ${code}`));
            }
          });

          dot.once('error', error => {
            dot.off('exit');
            dot.kill('SIGTERM');
            reject(error);
          });

          dot.stdin.end(block.body);
        })
          .then(svg => {
            return `<div class="plugin-dot">${svg}</div>`;
          })
          .catch(() => {
            return '```\n' + block.body + '\n```';
          });
      },
    },
  },
};
