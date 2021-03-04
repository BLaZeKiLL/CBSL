module.exports = {
  docs: {
    'Getting Started': [
      'getting_started/introduction', 
      'getting_started/installation',
      'getting_started/configuration',
    ],
    Modules: [{
      Core: [
        'modules/core/introduction',
        {
          Collections: [
            'modules/core/collections/compressed_array',
            'modules/core/collections/object_pool'
          ]
        },
        'modules/core/provider',
      ]
    }, {
      Logging: [
        'modules/logging/introduction',
        'modules/logging/logger',
      ]
    }],
    Extensions: [{
      UniTask: [
        'extensions/unitask/introduction',
        'extensions/unitask/batching'
      ]
    }]
  },
};
