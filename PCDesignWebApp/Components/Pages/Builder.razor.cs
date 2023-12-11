// using Google.Cloud.Firestore;
// using Microsoft.AspNetCore.Components;
// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;

// FirestoreDb db = FirestoreDb.Create("pcdesign-99abf");
// public class Notes
// {
//     public string Id { get; set; }
//     public string description { get; set; }
// }

// private IEnumerable<Notes> notes = Array.Empty<Notes>();

// private async Task refreshList()
// {
//     CollectionReference collection = db.Collection("notes");
//     QuerySnapshot docs = await collection.GetSnapshotAsync();
//     var lst = new List<Notes>();
//     foreach (var doc in docs.Documents)
//     {
//         lst.Add(new Notes{Id=doc.Id,description=doc.GetValue<string>("description")});
//     }
//     Notes = lst;
// }

// protected override async Task protected override async Task OnInitializedAsync()
// {
//     await refreshList();
// }


// public partial class YourComponent : ComponentBase
// {
//    private FirebaseApp firebaseApp;
//    private Firestore firestore;
//    private List<string> build1Data = new List<string>();

//    protected override void OnInitialized()
//    {
//        base.OnInitialized();

//        var firebaseConfig = new
//        {
//            apiKey = "AIzaSyBhFh8-bPKf37j_MCZaJucZ6W17OaumkuY",
//            authDomain = "pcdesign-99abf.firebaseapp.com",
//            projectId = "pcdesign-99abf",
//            storageBucket = "pcdesign-99abf.appspot.com",
//            messagingSenderId = "359736132475",
//            appId = "1:359736132475:web:04c009de7e4ca4445c33de"
//        };

//        firebaseApp = Firebase.FirebaseApp.InitializeApp(firebaseConfig);
//        firestore = Firebase.Firestore.GetFirestore(firebaseApp);
//    }

//    protected override async Task OnInitializedAsync()
//    {
//        var documentRef = Firebase.Firestore.Doc(firestore, "Builds/DioVXUe05ixuSsc9RvGr");
//        var build1Collection = Firebase.Firestore.Collection(documentRef, "Build1");
//        var querySnapshot = await Firebase.Firestore.GetDocs(build1Collection);

//        build1Data = querySnapshot.Docs
//            .Select(doc => doc.Data().ToObject<string>())
//            .ToList();

//        StateHasChanged();
//    }
// }

// internal class Firestore
// {
// }

// internal class FirebaseApp
// {
// }