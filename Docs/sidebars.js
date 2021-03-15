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
            {
              'Compressed Array': [
                'modules/core/collections/compressed_array/introduction',
                'modules/core/collections/compressed_array/byte_list',
                'modules/core/collections/compressed_array/node_list',
              ]
            },
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
    }, {
      'Manager Framework': [
        'modules/manager/introduction',
        'modules/manager/scene_controller',
        'modules/manager/manager'
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
