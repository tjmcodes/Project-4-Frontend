export function getLoggedInUserId() {
  // Return false if there is no local storage available
  if (!localStorage) return false
  const token = localStorage.getItem("token")
  // See if token exists
  if (!token) return false
  const middlePart = token.split('.')[1]
  const decodedString = window.atob(middlePart)
  const decodedObj = JSON.parse(decodedString)
  return decodedObj.userId
}

// Check to see if the logged in user created something.
export function isCreator(userIdToCompare) {
  if (!userIdToCompare) return false
  return userIdToCompare === getLoggedInUserId()
}