// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).



// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


var findMedianSortedArrays = function (nums1, nums2) {
    var mergedarr = [];
    mergedarr = [...nums1, ...nums2].sort((a, b) => a - b);
    console.log("mergedarr " + mergedarr);
    if (mergedarr.length % 2 == 0) {
        var middleofMergedArray = Math.floor(mergedarr.length / 2)
        console.log(middleofMergedArray);
        return (mergedarr[middleofMergedArray - 1] + mergedarr[middleofMergedArray]) / 2;
    }
    else {
        return mergedarr[Math.floor(mergedarr.length / 2)];
    }
};
