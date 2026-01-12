function solution(phone_book) {
    const phoneSet = new Set(phone_book);
    for (const number of phone_book) {
        let prefix = "";
        for (const char of number) {
            prefix += char;
            if (prefix !== number && phoneSet.has(prefix)) {
                return false;
            }
        }
    }
    return true;
}