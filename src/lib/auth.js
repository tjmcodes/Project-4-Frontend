export function getLoggedInUserId() {
  console.log("function triggered")
  // Return false if there is no local storage available
  if (!localStorage) return false
  const token = localStorage.getItem("token")
  console.log(token)
  // See if token exists
  if (!token) return false
  const middlePart = token.split('.')[1]
  console.log(middlePart)
  const decodedString = window.atob(middlePart)
  console.log(decodedString)
  const decodedObj = JSON.parse(decodedString)
  console.log(decodedObj)
  return decodedObj.userId
}

// Check to see if the logged in user created something.
export function isCreator(userIdToCompare) {
  if (!userIdToCompare) return false
  return userIdToCompare === getLoggedInUserId()
}