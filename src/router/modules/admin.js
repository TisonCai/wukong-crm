/** 系统管理路由 */
import Layout from '@/views/layout/AdminLayout'

const layout = function(meta = {}, path = '/manage', requiresAuth = true) {
  return {
    path: path,
    component: Layout,
    meta: {
      requiresAuth: requiresAuth,
      ...meta
    }
  }
}

export default [
  {
    ...layout({
      permissions: ['manage']
    })
    // children: [{
    //   path: 'update', // 升级
    //   component: () => import('@/views/admin/update'),
    //   meta: {
    //     title: '在线升级',
    //     icon: 'data-import'
    //   }
    // }]
  },
  {
    ...layout({
      permissions: ['manage', 'users', 'read']
    }),
    children: [{
    }]
  },
  {
    ...layout({
      permissions: ['manage', 'permission'],
      title: '角色权限管理',
      icon: 'user'
    }, '/manage/role-auth'),
    alwaysShow: true,
    name: 'manage-role-auth'
    // children: [{
    //   name: 'role-auth',
    //   path: 'role-auth/:pid/:title',
    //   hidden: true,
    //   component: () => import('@/views/admin/roleAuth/index'),
    //   meta: {}
    // }]
  },
  {
    ...layout({
      permissions: ['manage', 'examineFlow']
    }),
    children: [{

    }]
  },
  {
    ...layout({
      permissions: ['manage', 'work']
    })
  },
  {
    ...layout({
      permissions: ['manage', 'crm'],
      title: '客户管理',
      icon: 'customer'
    }, '/manage/customer'),
    alwaysShow: true
    // children: [{
    //   name: 'handlefield',
    //   path: 'custom-field/:type/:id/:label',
    //   component: () => import('@/views/admin/crm/HandleField'),
    //   hidden: true,
    //   meta: {
    //     activeMenu: '/manage/customer/custom-field',
    //     requiresAuth: true,
    //     permissionList: [['manage', 'crm', 'field'], ['manage', 'crm', 'activityForm']]
    //   }
    // }]
  },
  {
    ...layout({
      permissions: ['manage', 'adminLog'],
      title: '系统日志',
      icon: 'record'
    }, '/manage/log/'),
    alwaysShow: true
  },
  {
    ...layout({}, '/manage', false)
    // children: [{
    //   name: 'system-other',
    //   path: 'system-other', // 其他配置
    //   component: () => import('@/views/admin/other'),
    //   meta: {
    //     title: '其他设置',
    //     icon: 'manage'
    //   }
    // }]
  },
  {
    ...layout({
      permissions: ['manage', 'init', 'initData']
    }, '/manage', false)
    // children: [{
    //   path: 'init', // 初始化数据
    //   component: () => import('@/views/admin/init/Set'),
    //   meta: {
    //     title: '初始化数据',
    //     icon: 'results-solid'
    //   }
    // }]
  }
]
