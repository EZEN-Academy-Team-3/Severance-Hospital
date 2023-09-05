(async () => {
    try{
        const params = {id:1};
        let result = await noticeService.getItem(params);
        console.log(result);
    }catch(e){
        console.error(e);
    }finally{
        DBPool.close();
    }
})();