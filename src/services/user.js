const fetchUser = async () => {
  const response = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/users?select=*`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  })
  const userData = await response.json()
  // console.log('USER', userData)
  return userData[0]
}

export default fetchUser
