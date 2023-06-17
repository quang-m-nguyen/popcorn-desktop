/** Default settings **/
var Settings = {
  projectName: 'Popcorn Time',
  projectUrl: '',
  projectCi: 'https://github.com/popcorn-official/popcorn-desktop/actions',
  projectBlog: 'https://github.com/popcorn-official/popcorn-desktop/wiki',
  projectForum: 'https://www.reddit.com/r/PopcornTimeApp',
  projectForum2: '',
  statusUrl: 'https://status.popcorntime.app',
  changelogUrl: 'https://github.com/popcorn-official/popcorn-desktop/commits/master',
  issuesUrl: 'https://github.com/popcorn-official/popcorn-desktop/issues',
  sourceUrl: 'https://github.com/popcorn-official/popcorn-desktop/',
  commitUrl: 'https://github.com/popcorn-official/popcorn-desktop/commit',
  dht: '',
  dhtInfo: '',
  updateKey:
    '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBtjCCASsGByqGSM44BAEwggEeAoGBAPNM5SX+yR8MJNrX9uCQIiy0t3IsyNHs\n' +
    'HWA180wDDd3S+DzQgIzDXBqlYVmcovclX+1wafshVDw3xFTJGuKuva7JS3yKnjds\n' +
    'NXbvM9CrJ2Jngfd0yQPmSh41qmJXHHSwZfPZBxQnspKjbcC5qypM5DqX9oDSJm2l\n' +
    'fM/weiUGnIf7AhUAgokTdF7G0USfpkUUOaBOmzx2RRkCgYAyy5WJDESLoU8vHbQc\n' +
    'rAMnPZrImUwjFD6Pa3CxhkZrulsAOUb/gmc7B0K9I6p+UlJoAvVPXOBMVG/MYeBJ\n' +
    '19/BH5UNeI1sGT5/Kg2k2rHVpuqzcvlS/qctIENgCNMo49l3LrkHbJPXKJ6bf+T2\n' +
    '8lFWRP2kVlrx/cHdqSi6aHoGTAOBhAACgYBTNeXBHbWDOxzSJcD6q4UDGTnHaHHP\n' +
    'JgeCrPkH6GBa9azUsZ+3MA98b46yhWO2QuRwmFQwPiME+Brim3tHlSuXbL1e5qKf\n' +
    'GOm3OxA3zKXG4cjy6TyEKajYlT45Q+tgt1L1HuGAJjWFRSA0PP9ctC6nH+2N3HmW\n' +
    'RTcms0CPio56gg==\n' +
    '-----END PUBLIC KEY-----\n',
  opensubtitles: {
    useragent: 'Butter'
  },
  trakttv: {
    client_id:
      '647c69e4ed1ad13393bf6edd9d8f9fb6fe9faf405b44320a6b71ab960b4540a2',
    client_secret:
      'f55b0a53c63af683588b47f6de94226b7572a6f83f40bd44c58a7c83fe1f2cb1'
  },
  fanart: {
    api_key: 'ce4bba4b3cc473306c6cddb4e1cb0da4'
  },
  tvdb: {
    api_key: '80A769280C71D83B'
  },
  tmdb: {
    api_key: 'ac92176abc89a80e6f5df9510e326601'
  }
};

Settings.providers = {
  movie: {
    order: 1,
    name: 'Movies',
    uri: [
    ]
  },
  tvshow: {
    order: 2,
    name: 'Series',
    uri: [
    ]
  },
  anime: {
    order: 3,
    name: 'Anime',
    uri: [
    ]
  },
  subtitle: 'OpenSubtitles',
  metadata: 'Trakttv',
  torrentCache: 'TorrentCache'
};

Settings.trackers = {
  blacklisted: ['demonii'],
  forced: [
    'udp://tracker.opentrackr.org:1337',
    'udp://tracker.tiny-vps.com:6969',
    'udp://tracker.openbittorrent.com:1337',
    'udp://tracker.leechers-paradise.org:6969',
    'udp://p4p.arenabg.com:1337',
    'udp://tracker.internetwarriors.net:1337',
    'udp://9.rarbg.to:2720',
    'udp://9.rarbg.me:2720',
    'udp://exodus.desync.com:6969',
    'udp://tracker.cyberia.is:6969',
    'udp://tracker.torrent.eu.org:451',
    'udp://open.stealth.si:80',
    'udp://tracker.moeking.me:6969',
    'udp://tracker.dler.org:6969',
    'udp://explodie.org:6969',
    'udp://retracker.lanta-net.ru:2710',
    'udp://opentracker.i2p.rocks:6969',
    'udp://tracker.bitsearch.to:1337',
    'wss://tracker.openwebtorrent.com'
  ]
};

// User Interface
Settings.theme = 'Official_-_Dark_theme';
Settings.startScreen = 'Movies';
Settings.lastTab = '';
Settings.moviesTabEnable = true;
Settings.seriesTabEnable = true;
Settings.animeTabEnable = true;
Settings.favoritesTabEnable = true;
Settings.coversShowRating = true;
Settings.showSeedboxOnDlInit = true;
Settings.expandedSearch = false;
Settings.defaultFilters = 'default';
Settings.watchedCovers = 'fade';
Settings.tv_detail_jump_to = 'next';
Settings.postersMinWidth = 134;
Settings.postersMaxWidth = 294;
Settings.postersMinFontSize = 0.8;
Settings.postersMaxFontSize = 1.3;
Settings.postersSizeRatio = 196 / 134;
Settings.postersWidth = Settings.postersMinWidth;
Settings.postersJump = [134, 154, 174, 194, 214, 234, 254, 274, 294];
Settings.bigPicture = 100;
Settings.nativeWindowFrame = nw.App.manifest.window.frame;
Settings.alwaysOnTop = false;
Settings.minimizeToTray = false;
Settings.events = true;
Settings.ratingStars = true;
Settings.showAdvancedSettings = true;

// Language
Settings.language = '';
Settings.contentLanguage = '';
Settings.contentLangOnly = false;
Settings.translateTitle = 'translated';
Settings.translateEpisodes = true;
Settings.translateSynopsis = true;
Settings.translatePosters = true;

// Subtitles
Settings.subtitle_language = 'none';
Settings.subtitle_font = 'Arial';
Settings.subtitle_decoration = 'Outline';
Settings.subtitle_size = '38px';
Settings.subtitle_color = '#ffffff';
Settings.subtitles_bold = false;
Settings.multipleExtSubtitles = false;
Settings.opensubtitlesAuthenticated = false;
Settings.opensubtitlesUsername = '';
Settings.opensubtitlesPassword = '';
Settings.playerSubPosition = '0px';

// Playback
Settings.alwaysFullscreen = false;
Settings.playNextEpisodeAuto = false;
Settings.preloadNextEpisodeTime = 1;
Settings.activateLoCtrl = false;
Settings.chosenPlayer = 'local';
Settings.shows_default_quality = '1080p';
Settings.movies_default_quality = '1080p';
Settings.playerVolume = '1';
Settings.audioPassthrough = false;

// Features
Settings.activateWatchlist = false;
Settings.traktStatus = false;
Settings.traktLastSync = false;
Settings.traktLastActivities = false;
Settings.traktSyncOnStart = true;
Settings.traktPlayback = true;
Settings.activateTorrentCollection = true;
Settings.toggleSengines = false;
Settings.enableThepiratebaySearch = true;
Settings.enable1337xSearch = true;
Settings.enableSolidTorrentsSearch = true;
Settings.enableTgxtorrentSearch = true;
Settings.enableNyaaSearch = true;
Settings.activateSeedbox = true;
Settings.activateTempf = true;

// Remote Control
Settings.httpApiEnabled = false;
Settings.httpApiPort = 8008;
Settings.httpApiUsername = 'popcorn';
Settings.httpApiPassword = 'popcorn';

// API Server(s)
Settings.customMoviesServer = '';
Settings.customSeriesServer = '';
Settings.customAnimeServer = '';
Settings.dhtEnable = '';

// Connection
Settings.maxActiveTorrents = 5;
Settings.connectionLimit = 55;
Settings.maxUdpReqLimit = 16;
Settings.downloadLimit = '';
Settings.uploadLimit = '';
Settings.maxLimitMult = 1024;
Settings.totalDownloaded = 0;
Settings.totalUploaded = 0;
Settings.streamPort = 0; // 0 = Random
Settings.continueSeedingOnStart = false;
Settings.protocolEncryption = false;
Settings.proxyServer = '';

// Cache
Settings.tmpLocation = path.join(os.tmpdir(), Settings.projectName);
Settings.deleteTmpOnClose = true;
Settings.delSeedboxCache = 'ask';
Settings.separateDownloadsDir = false;
Settings.downloadsLocation = path.join(os.tmpdir(), Settings.projectName);

// Database
Settings.databaseLocation = path.join(data_path, 'data');

// Updates
Settings.updateNotification = true;
Settings.automaticUpdating = false;

// App Settings
Settings.version = false;
Settings.dbversion = '0.1.0';
Settings.font = 'tahoma';
Settings.defaultWidth = Math.round(window.screen.availWidth * 0.8);
Settings.defaultHeight = Math.round(window.screen.availHeight * 0.8);

Settings.updateEndpoint = {
  url: 'https://butterproject.org/',
  index: 0,
  proxies: [
    {
      url: 'https://butterproject.org/',
      fingerprint: ''
    },
    {
      url: 'https://butterproject.github.io/',
      fingerprint: ''
    }
  ]
};

var ScreenResolution = {
  get SD() {
    return window.screen.width < 1280 || window.screen.height < 720;
  },
  get HD() {
    return (
      (window.screen.width >= 1280 && window.screen.width < 1920) ||
      (window.screen.height >= 720 && window.screen.height < 1080)
    );
  },
  get FullHD() {
    return (
      (window.screen.width >= 1920 && window.screen.width < 2000) ||
      (window.screen.height >= 1080 && window.screen.height < 1600)
    );
  },
  get UltraHD() {
    return window.screen.width >= 2000 || window.screen.height >= 1600;
  },
  get QuadHD() {
    return window.screen.width >= 3000 || window.screen.height >= 1800;
  },
  get Standard() {
    return window.devicePixelRatio <= 1;
  },
  get Retina() {
    return window.devicePixelRatio > 1;
  }
};

var AdvSettings = {
  get: function(variable) {
    if (typeof Settings[variable] !== 'undefined') {
      return Settings[variable];
    }

    return false;
  },

  set: function(variable, newValue) {
    Database.writeSetting({
      key: variable,
      value: newValue
    }).then(function() {
      Settings[variable] = newValue;
    });
  },

  setup: function() {
    AdvSettings.performUpgrade();
    return AdvSettings.getHardwareInfo();
  },

  getHardwareInfo: function() {
    if (/64/.test(process.arch)) {
      AdvSettings.set('arch', 'x64');
    } else {
      AdvSettings.set('arch', 'x86');
    }

    switch (process.platform) {
      case 'darwin':
        AdvSettings.set('os', 'mac');
        break;
      case 'win32':
        AdvSettings.set('os', 'windows');
        break;
      case 'linux':
        AdvSettings.set('os', 'linux');
        break;
      default:
        AdvSettings.set('os', 'unknown');
        break;
    }

    return Q();
  },

  getNextApiEndpoint: function(endpoint) {
    if (endpoint.index < endpoint.proxies.length - 1) {
      endpoint.index++;
    } else {
      endpoint.index = 0;
    }
    endpoint.ssl = undefined;
    _.extend(endpoint, endpoint.proxies[endpoint.index]);
    return endpoint;
  },

  checkApiEndpoints: function(endpoints) {
    return Q.all(
      _.map(endpoints, function(endpoint) {
        return AdvSettings.checkApiEndpoint(endpoint);
      })
    );
  },

  checkApiEndpoint: function(endpoint, defer) {
    if (Settings.automaticUpdating === false) {
      return;
    }

    defer = defer || Q.defer();

    endpoint.ssl = undefined;
    _.extend(endpoint, endpoint.proxies[endpoint.index]);

    var _url = url.parse(endpoint.url);
    win.debug('Checking %s endpoint', _url.hostname);

    function tryNextEndpoint() {
      if (endpoint.index < endpoint.proxies.length - 1) {
        endpoint.index++;
        AdvSettings.checkApiEndpoint(endpoint, defer);
      } else {
        endpoint.index = 0;
        endpoint.ssl = undefined;
        _.extend(endpoint, endpoint.proxies[endpoint.index]);
        defer.resolve();
      }
    }

    if (endpoint.ssl === false) {
      var request = http
        .get(
          {
            hostname: _url.hostname
          },
          function(res) {
            res
              .once('data', function(body) {
                res.removeAllListeners('error');
                // Doesn't match the expected response
                if (
                  !_.isRegExp(endpoint.fingerprint) ||
                  !endpoint.fingerprint.test(body.toString('utf8'))
                ) {
                  win.warn(
                    '[%s] Endpoint fingerprint %s does not match %s',
                    _url.hostname,
                    endpoint.fingerprint,
                    body.toString('utf8')
                  );
                  tryNextEndpoint();
                } else {
                  defer.resolve();
                }
              })
              .once('error', function(e) {
                win.warn('[%s] Endpoint failed [%s]', _url.hostname, e.message);
                tryNextEndpoint();
              });
          }
        )
        .setTimeout(5000, function() {
          win.warn('[%s] Endpoint timed out', _url.hostname);
          request.abort();
          tryNextEndpoint();
        });
    } else {
      tls
        .connect(
          443,
          _url.hostname,
          {
            servername: _url.hostname,
            rejectUnauthorized: false
          },
          function() {
            this.setTimeout(0);
            this.removeAllListeners('error');
            if (
              !this.authorized ||
              this.authorizationError ||
              this.getPeerCertificate().fingerprint !== endpoint.fingerprint
            ) {
              // "These are not the certificates you're looking for..."
              // Seems like they even got a certificate signed for us :O
              win.warn(
                '[%s] Endpoint fingerprint %s does not match %s',
                _url.hostname,
                endpoint.fingerprint,
                this.getPeerCertificate().fingerprint
              );
              tryNextEndpoint();
            } else {
              defer.resolve();
            }
            this.end();
          }
        )
        .once('error', function(e) {
          win.warn('[%s] Endpoint failed [%s]', _url.hostname, e.message);
          this.setTimeout(0);
          tryNextEndpoint();
        })
        .once('timeout', function() {
          win.warn('[%s] Endpoint timed out', _url.hostname);
          this.removeAllListeners('error');
          this.end();
          tryNextEndpoint();
        })
        .setTimeout(5000);
    }

    return defer.promise;
  },

  performUpgrade: function() {
    // This gives the official version (the package.json one)
    var currentVersion = nw.App.manifest.version;

    if (currentVersion !== AdvSettings.get('version')) {
      // Nuke the DB if there's a newer version
      // Todo: Make this nicer so we don't lose all the cached data
      var cacheDb = openDatabase(
        'cachedb',
        '',
        'Cache database',
        50 * 1024 * 1024
      );

      cacheDb.transaction(function(tx) {
        tx.executeSql('DELETE FROM subtitle');
        tx.executeSql('DELETE FROM metadata');
      });

      // Add an upgrade flag
      window.__isUpgradeInstall = true;
    }
    AdvSettings.set('version', currentVersion);
    AdvSettings.set('releaseName', nw.App.manifest.releaseName);
  }
};
