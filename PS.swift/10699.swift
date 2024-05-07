import Foundation 

var df = DateFormatter()
df.dateFormat = "YYYY-MM-dd"

print(df.string(from: Date()))