export interface Favoris {
  nom: string;
  ref: string;
  idPays: number;
  showDetails: boolean;
  icon: string;
  region:{
      nomRegion: string;
      refRegion: string;
      idRegion: number;
    }
  favoris:{
    id: number,
    nom: string,
    type: string,
    mesure : number,
    orientation:string,
  }
}
