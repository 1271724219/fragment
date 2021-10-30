var closestDivisors = function (num) {

    /**
     * *思路
     * 1.根据题意最终值为num+1或num+2，我们先将num+2
     * 2.计算出开方的的值cnum（例如果num+2==100，我们枚举的范围只需要是1-10）
     * 3.如果计算出的值大于1则开始枚举，计算出最大值与现值的余数如果为1||0（因为前面+2这里余0为num+2整除，1为num+1）则符合题意
     * 4.得出结果并返回这里有个细节就是要减去刚才的余数再除当前值
     *
     */
let snum = num+2
let cnum = ~~Math.sqrt(snum)
while (cnum>1) {
    let left = snum % cnum
    if (left <= 1) {
        return [cnum,(snum - left)/cnum]
    }
    cnum--
}
return [cnum,cnum+1]
}
