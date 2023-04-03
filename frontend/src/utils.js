export const searchQuery  = (searchTerm)=>{
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*' ]{
        image {
            asset->{
                url
            }
        },
        _id,
        destination,
        
    }`
    return query;
}
 export  const feedQuery = `*[_type == 'pin' | order(_createdAt desc] |
 
 {
  image {
     asset->{
            url
        }
    },
    _id,
    destination,
 }`
