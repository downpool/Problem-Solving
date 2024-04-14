def computeLPSList(pattern):
	lps = [0] * len(pattern)
	
	index = 1
	_len = 0
	
	while index < len(pattern):
		if pattern[index] == pattern[_len]:
			_len += 1
			lps[index] = _len
			index += 1
		else:
			if _len == 0:
				#  since a shorted prefix is not possible
				lps[index] = 0
				index += 1
			else:
				_len = lps[_len - 1]
	return lps

if __name__ == "__main__":
    print(computeLPSList("abaab"))
    