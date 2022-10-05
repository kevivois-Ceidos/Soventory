import HeaderMode from "./Mode";
const headers = [
    {
        key:"id",
        labelName:"Id",
        mode:HeaderMode.DEFAULT,
        sorting:true,
        canEdit:true,
        inner:false,
        isDropDownList:false,
        ordering:true,
        order:"asc",
        id:0
    },
    {
        key:"materiel",
        labelName:"Materiel",
        mode:HeaderMode.DEFAULT,
        canEdit:false,
        isDropDownList:true,
        filter:true,
        inner:true,
        id:1
    },
    {
        key:"marque",
        labelName:"Marque",
        filter:true,
        mode:HeaderMode.DEFAULT,
        canEdit:false,
        isDropDownList:true,
        inner:true,
        id:2
    },
    {
        key:"modele",
        labelName:"Modèle",
        filter:false,
        mode:HeaderMode.DEFAULT,
        canEdit:true,
        inner:false,
        id:3
    },
    {
        key:"num_serie",
        labelName:"Numéro de série",
        mode:HeaderMode.DEFAULT,
        canEdit:true,
        inner:false,
        id:4
    },
    {
        key:"num_produit",
        labelName:"Numéro de produit",
        mode:HeaderMode.DEFAULT,
        canEdit:true,
        inner:false,
        id:5
    },
    {
        key:"section",
        labelName:"Section",
        mode:HeaderMode.DEFAULT,
        canEdit:false,
        isDropDownList:true,
        filter:true,
        inner:true,
        id:6
    },
    {
        key:"etat",
        labelName:"Etat",
        filter:true,
        mode:HeaderMode.DEFAULT,
        canEdit:false,
        isDropDownList:true,
        inner:true,
        id:7
    },
    {
        key:"lieu",
        labelName:"Lieu",
        filter:true,        
        mode:HeaderMode.DEFAULT,
        canEdit:false,
        isDropDownList:true,
        inner:true,
        id:8
    },
    {
        key:"remarque",
        labelName:"Remarque",
        mode:HeaderMode.DEFAULT,
        canEdit:true,
        inner:false,
        id:9
    },
    {
        key:"date_achat",
        labelName:"Date d'achat",
        canEdit:true,
        mode:HeaderMode.DEFAULT,
        inner:false,
        id:10
    },
    {
        key:"garantie",
        labelName:"Garantie",
        mode:HeaderMode.DEFAULT,
        canEdit:true,
        inner:false,
        id:11
    },
    {
        key:"fin_garantie",
        labelName:"Fin de garantie",
        mode:HeaderMode.DEFAULT,
        canEdit:true,
        inner:false,
        id:12
        
    },
    {
        key:"prix",
        labelName:"Prix",
        mode:HeaderMode.DEFAULT,
        canEdit:true,
        inner:false,
        id:13
    },
    {
        key:"archive",
        labelName:"Archivé",
        mode:HeaderMode.DEFAULT,
        canEdit:true,
        inner:false,
        show:false,
        id:14
    }
]
export default headers;