require('dotenv').config()
const getRoutes=require('./config/routes')
const nextConfig={
  exportPathMap:getRoutes,
  distDir:'./.next',
  useFileSystemPublicRoutes:false,
  trailingSlash:true,
  env:{

  }
}
module.exports =nextConfig
