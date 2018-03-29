const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  userInfo: state =>state.user.userInfo,//用户所有信息
  
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters
