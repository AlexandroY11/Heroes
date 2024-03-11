import { Injectable } from '@angular/core';
import { fotosHeroe } from '../interfaces/fotos-heroe';

@Injectable({
  providedIn: 'root'
})
export class FotosHeroeService {

  constructor() { }

  private fotosHeroe:fotosHeroe[] = [
  
    //AQUAMAN
    {
      id: 1,
      idHeroe: 1,
      nombreHeroe: "Aquaman",
      url: "https://comicvine.gamespot.com/a/uploads/scale_small/11111/111113340/9032622-aquaman-and-the-lost-kingdom-special-1-open-to-order-variant-cheung.jpg",
    },
    {
      id: 2,
      idHeroe: 1,
      nombreHeroe: "Aquaman",
      url: "https://i.ebayimg.com/images/g/CK8AAOSwm7Bi~NkP/s-l500.jpg ",
    },
    {
      id: 3,
      idHeroe: 1,
      nombreHeroe: "Aquaman",
      url: "https://i.ebayimg.com/images/g/yxwAAOSw0Phi-9Rq/s-l500.jpg",
    },
    //BATMAN
    {
      id: 4,
      idHeroe: 2,
      nombreHeroe: "Batman",
      url: "https://images-cdn.ubuy.ae/634d0cc50dae823b9a54f97f-the-batman-movie-poster-i-am-the.jpg",
    },
    {
      id: 5,
      idHeroe: 2,
      nombreHeroe: "Batman",
      url: "https://m.media-amazon.com/images/I/71l9Q9W4oPL._AC_SL1500_.jpg",
    },
    {
      id: 6,
      idHeroe: 2,
      nombreHeroe: "Batman",
      url: "https://static.posters.cz/image/750/posters/the-batman-crepuscular-rays-i126661.jpg",
    },
    //DAREDEVIL
    {
      id: 7,
      idHeroe: 3,
      nombreHeroe: "Daredevil",
      url: "https://m.media-amazon.com/images/I/41zR+pDyUNL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 8,
      idHeroe: 3,
      nombreHeroe: "Daredevil",
      url: "https://image.tmdb.org/t/p/original/2qfaHJaodEbMmj9GXMvj84mbpy3.jpg",
    },
    {
      id: 9,
      idHeroe: 3,
      nombreHeroe: "Daredevil",
      url: "https://moviepostermexico.com/cdn/shop/products/daredevil_ver3_xxlg_360x.jpg?v=1572365083",
    },
    //HULK
    {
      id: 10,
      idHeroe: 4,
      nombreHeroe: "Hulk",
      url: "data:image/jpeg;base64,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",
    },
    {
      id: 11,
      idHeroe: 4,
      nombreHeroe: "Hulk",
      url: "data:image/jpeg;base64,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",
    },
    {
      id: 12,
      idHeroe: 4,
      nombreHeroe: "Hulk",
      url: "https://e1.pxfuel.com/desktop-wallpaper/688/574/desktop-wallpaper-hulk-comic-marvel-comics-artworkpinterest-planet-hulk.jpg ",
    },
    {
      id: 13,
      idHeroe: 5,
      nombreHeroe: "Linterna Verde",
      url: "https://1.bp.blogspot.com/-z4eXDARjEec/TZeKrXzVgJI/AAAAAAAAIRY/ziX_Su1_Rxk/s1600/poster-xlarge.jpg",
    },
    {
      id: 14,
      idHeroe: 5,
      nombreHeroe: "Linterna Verde",
      url: "https://image.tmdb.org/t/p/original/sMY9v7Q4gHijiI7MTwp5T57MML3.jpg",
    },
    {
      id: 15,
      idHeroe: 5,
      nombreHeroe: "Linterna Verde",
      url: "https://image.tmdb.org/t/p/original/ywzCQ1xbeXqFlxVbgVwRnQARRoI.jpg",
    },
    {
      id: 16,
      idHeroe: 6,
      nombreHeroe: "Hombre Araña",
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/487e16133455823.61bde605d7090.png",
    },
    {
      id: 17,
      idHeroe: 6,
      nombreHeroe: "Hombre Araña",
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a8b0fd132117385.61a2ad5d83d0f.png",
    },
    {
      id: 18,
      idHeroe: 6,
      nombreHeroe: "Hombre Araña",
      url: "https://i.ebayimg.com/thumbs/images/g/MSIAAOSwAeFhxRSP/s-l640.jpg",
    },
    {
      id: 19,
      idHeroe: 7,
      nombreHeroe: "Wolverine",
      url: "https://i.pinimg.com/474x/77/eb/92/77eb9232d4f2301d7a74add6567b52bf.jpg",
    },
    {
      id: 20,
      idHeroe: 7,
      nombreHeroe: "Wolverine",
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/68afb6fa-e011-4c0e-b0b2-a1426fc7787a/d5fvozy-0a19b0e9-e898-44b7-9809-4ee3d632ea53.jpg/v1/fit/w_600,h_900,q_70,strp/the_wolverine__2013__movie_poster_by_dcomp_d5fvozy-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNjhhZmI2ZmEtZTAxMS00YzBlLWIwYjItYTE0MjZmYzc3ODdhXC9kNWZ2b3p5LTBhMTliMGU5LWU4OTgtNDRiNy05ODA5LTRlZTNkNjMyZWE1My5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.v9d88mb-wcvrxigyP8LYOzy0G-Qd_W017DFy5bLTNGk",
    },
    {
      id: 21,
      idHeroe: 7,
      nombreHeroe: "Wolverine",
      url: "https://www.postergully.com/cdn/shop/products/PG23_Copy_dd1820e2-466e-4767-889f-5d2a79b54c71.jpg?v=1578633585",
    },
  ]

  getFotosHeroes():fotosHeroe[]{
    return this.fotosHeroe;

  }
  getFotoHeroe(idx: number){
    console.log(idx)
    let fotosHeroe: fotosHeroe[] = [];
    let NombreHeroe = "";
    for (let i = 0; i < this.fotosHeroe.length; i++) {
      let heroe = this.fotosHeroe[i];
      console.log(heroe);
      let id = heroe.idHeroe;
      console.log(id);
      console.log(idx);
      if (idx === id) { // Usar === para comparar estrictamente
        console.log('entre');
        console.log(heroe);
        NombreHeroe = heroe.nombreHeroe;
        fotosHeroe.push(heroe);
      }
    }
    return fotosHeroe;
  }
  

}
