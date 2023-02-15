//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args){
        let hash = md5(args);
        let objInCache = cache.find((item) => item.hash === hash)
        if (objInCache){
            return "Из кэша: " + objInCache.value;

        } else {
            let result = func(...args);
            cache.push({hash: hash, value: result})
            if (cache.length > 5){
                cache.shift();
            };
            return "Вычисляем: " + result;
        }

    }
    return wrapper
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
    function wrapper(...args){
      wrapper.allCount ++;
      clearTimeout(timeoutId);
      if (!wrapper.count){
          wrapper.count ++;
          func(...args);
      }else{
          timeoutId = setTimeout(() => {
              wrapper.count ++;
              func(...args);
          }, delay);
      }
    }
    return wrapper;
  }


/*function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count= 0;
  wrapper.allCount =0;
  function wrapper(...args){
    wrapper.allCount +=1;
    if (!timeoutId){
        timeoutId = setInterval(()=>{
            wrapper.count += 1;
            func.apply(this,...args)
        },delay);
         func(...args);
    } else {
         clearInterval();
    }
  }
  return wrapper;
}*/
