function solution(phone_book) {
    const phoneSet = new Set(phone_book);
    
    for (const phone of phone_book) {
        let prefix = "";
        for (const char of phone) {
            prefix += char;
            if (phone !== prefix && phoneSet.has(prefix)) return false;
        }
    }
    
    return true;
}