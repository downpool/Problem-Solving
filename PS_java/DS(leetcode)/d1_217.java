import java.util.*;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Map<Integer, Integer> duplicateMap = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            if(duplicateMap.containsKey(nums[i])){
                return true;
            }
            duplicateMap.put(nums[i], i);
        }
        return false;
    }
}

public class d1_217 {
    public static void main(String[] args) {
        
    }
}