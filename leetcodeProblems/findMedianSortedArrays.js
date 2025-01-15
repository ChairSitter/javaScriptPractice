const findMedianSortedArrays = (nums1, nums2) => {
    let sortedArray = [];
    let p1 = 0;
    let p2 = 0;
    let median;
    if(!nums1.length){
        if(nums2.length % 2 === 0){
            median = (nums2[nums2.length/2] + nums2[(nums2.length/2)-1]) / 2;
        } else {
            median = nums2[(nums2.length-1)/2]
        }
        return median;
    } 
    if(!nums2.length){
        if(nums1.length % 2 === 0){
            median = (nums1[nums1.length/2] + nums1[(nums1.length/2)-1]) / 2;
        } else {
            median = nums1[(nums1.length-1)/2]
        }
        return median;
    } 
    while(typeof nums1[p1] === 'number' && typeof nums2[p2] === 'number'){
        if(nums1[p1] < nums2[p2]){
            sortedArray.push(nums1[p1]);
            p1++;
        } else if(nums1[p1] > nums2[p2]){
            sortedArray.push(nums2[p2]);
            p2++;
        } else {
            sortedArray.push(nums1[p1]);
            sortedArray.push(nums2[p2]);
            p1++;
            p2++;
        }
    } 
    if (!nums1[p1]) {
        while(typeof nums2[p2] === 'number'){
            sortedArray.push(nums2[p2]);
            p2++;
        }
    } else {
        while(typeof nums1[p1] === 'number'){
            sortedArray.push(nums1[p1]);
            p1++;
        }
    }
    if(sortedArray.length % 2 === 0){
        median = (sortedArray[sortedArray.length/2] + sortedArray[(sortedArray.length/2)-1]) / 2;
    } else {
        median = sortedArray[(sortedArray.length-1)/2]
    }
    return median;
};

console.log(findMedianSortedArrays([0], []));