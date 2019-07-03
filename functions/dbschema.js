 let db = {
     screams: [
         {
             userHandle: "user",
             body: "this is the scream body",
             createdAt: "2019-06-28T21:56:32.683Z",
             likeCount: 5,
             commentCount: 2
         }
     ],
     comments: [
         {
            userHandle: "user",
            screamId: "1crpsliQRLqISV6V3Yvt",
            body: "nice scream man!",
            createdAt: "2019-06-29T08:04:07.250Z"
         }
     ],
     notifications: [
        {
          recipient: 'user',
          sender: 'john',
          read: 'true | false',
          screamId: '1crpsliQRLqISV6V3Yvt',
          type: 'like | comment',
          createdAt: '2019-07-02T01:32:07.303Z'
        }
      ]
};

const userDetails = {
    // Redux data
    credentials: {
        userId: "MQsek5Ll4xRlyyq1kYBkRs2ohhg1",
        email: "new2@email.com",
        handle: "new2",
        createdAt: "2019-06-29T20:22:21.721Z",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/socialapp-b3125.appspot.com/o/8950044879.jpg?alt=media",
        bio: "Hello I'm new new",
        website: "https://user.com",
        location: "Los Angeles, CA"
    },
    likes: [
        {
            userHandle: "user",
            screamId: "1crpsliQRLqISV6V3Yvt"
        },
        {
            userHandle: "new",
            screamId: "vawK776Z4GuSJZ9Z7qE5"
        }
    ]
};