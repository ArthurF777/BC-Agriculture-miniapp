import {getCacheItem, setCacheItem} from "./utils/cache"
App(
  {
    onLaunch:function(){
    //检查缓存中是否存在了用户,不存在则获取用户信息
    var user = getCacheItem("userInfo");
    console.log("user statu", user)
    if(user === undefined){
      getUser().then(result =>{
        setCacheItem("userInfo",userToAdd, 0.5);
      } )
    }

    setCacheItem("isMarkReload", true, 24)
    }
  }
)