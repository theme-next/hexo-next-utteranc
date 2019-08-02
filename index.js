/* global hexo */

'use strict';

const utils = require('./utils')(hexo, __dirname);

hexo.extend.filter.register('theme_inject', function(injects) {

  let config = utils.defaultConfigFile('utteranc', 'default.yaml');
  if (!config.enable) return;

  if (!config.repo) {
    hexo.log.warn(`utteranc.repo can't be null.`);
    return;
  }

  injects.comment.raw('utteranc', `
  {% if page.comments %}
  <div class="comments">
  <script src="${config.cdn}" repo="${config.repo}" issue-term="${config.pathname}" theme="${config.theme}" crossorigin="anonymous" async></script>
  </div>
  {% endif %}
  `);

  injects.style.push(utils.getFilePath('utteranc.styl'));

});
