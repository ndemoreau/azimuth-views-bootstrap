Package.describe({
  name: 'mcrider:azimuth-views-bootstrap',
  summary: 'Azimuth CMS frontend templates (using Bootstrap 3.x)',
  version: '0.3.7',
  git: 'https://github.com/mcrider/azimuth-views-bootstrap'
});

Package.on_use(function (api) {
  api.use(['less@1.0.11', 'templating@1.0.9', 'mizzao:bootstrap-3@3.3.0'], 'client');
  api.use('mcrider:azimuth-core@0.3.20', {unordered: true});

  api.add_files('css/style.less', 'client');
  api.add_files('blocks/four_column/four_column.html', 'client');
  api.add_files('blocks/six_column/six_column.html', 'client');
  api.add_files('blocks/three_column/three_column.html', 'client');
  api.add_files('blocks/twelve_column/twelve_column.html', 'client');
  api.add_files('blocks/two_column/two_column.html', 'client');
  api.add_files('pages/home_page/home_page.html', 'client');
  api.add_files('pages/page_default/page_default.html', 'client');
  api.add_files('pages/sidebar_left/sidebar_left.html', 'client');
  api.add_files('pages/sidebar_left_fixed/sidebar_left_fixed.html', 'client');
  api.add_files('pages/sidebar_right/sidebar_right.html', 'client');
  api.add_files('views/404.html', 'client');
  api.add_files('views/block_display.html', 'client');
  api.add_files('views/footer.html', 'client');
  api.add_files('views/header.html', 'client');
  api.add_files('views/layout.html', 'client');
  api.add_files('views/not_authorized.html', 'client');
  api.add_files('views/accounts/account_buttons.html', 'client');
  api.add_files('views/accounts/error.html', 'client');
  api.add_files('views/accounts/forgot_password.html', 'client');
  api.add_files('views/accounts/login.html', 'client');
  api.add_files('views/accounts/sign_up.html', 'client');
  api.add_files('views/accounts/social.html', 'client');
  api.add_files('lib/utils.js', 'client');
});