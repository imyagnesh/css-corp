var str = `https://www.google-analytics.com/collect?v=1&_v=j96&a=266709095&t=event&ni=1&cu=USD&_s=2&dl=https%3A%2F%2Fwww.esteelauder.com%2Fproducts%2F647%2Fproduct-catalog%2Fmakeup%2Flips%2Flip-gloss&ul=en-us&de=UTF-8&dt=MPP%20%7C%20MPP%20-%20Makeup%20-%20Lip%20Gloss&sd=24-bit&sr=1280x720&vp=1263x536&je=0&ec=olapic__PureColorEnvy_Carousel&ea=olapic_media_render&el=2167512354_2982887244&_u=SDCAgAIr~&jid=&gjid=&cid=1819818028.1630941121&tid=UA-92561429-3&_gid=2127629887.1637579499&cd3=en&cd32=Lauder%20US&cd33=US&cd39=MPP%20%7C%20MPP%20-%20Makeup%20-%20Lip%20Gloss&cd41=MPP&cd42=category&cg1=category&cd31=Lauder&cd99=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F96.0.4664.45%20Safari%2F537.36&cg2=Not%20Mapped&cg3=category&z=1999366215`

//str = (str.trim().split(',')[1]).split(`https://`).pop();
str =decodeURIComponent(str);

//str=str.substr(0,str.split('=',1).join("").length);
console.log(str);
