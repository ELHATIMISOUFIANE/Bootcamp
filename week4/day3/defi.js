// 1. Création d'une classe Video avec les paramètres titre, uploadeur et durée
class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
    
    // 2. Création d'une méthode watch() qui affiche une chaîne de caractères
    watch() {
      console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
  }
  
  // 3. Instanciation d'un nouvel objet Video et appel de la méthode watch()
  const video1 = new Video("JavaScript Basics", "CodeMaster", 600);
  video1.watch();
  
  // 4. Instanciation d'un second objet Video avec des valeurs différentes
  const video2 = new Video("Object Oriented Programming", "ProgrammingPro", 720);
  video2.watch();
  
  // 5. Bonus: Utilisation d'un tableau pour stocker les données de cinq instances Video
  const videoDataArray = [
    { title: "CSS Tricks", uploader: "StyleGuru", time: 480 },
    { title: "HTML Fundamentals", uploader: "WebDev", time: 540 },
    { title: "React Tutorial", uploader: "FrontEndMaster", time: 900 },
    { title: "Node.js Basics", uploader: "BackEndDev", time: 750 },
    { title: "Full Stack Development", uploader: "DevNinja", time: 1200 }
  ];
  
  // 6. Bonus: Parcourir le tableau pour instancier ces objets
  console.log("Créer et regarder cinq vidéos:");
  const videoInstances = [];
  
  for (let i = 0; i < videoDataArray.length; i++) {
    const data = videoDataArray[i];
    const video = new Video(data.title, data.uploader, data.time);
    videoInstances.push(video);
    video.watch();
  }