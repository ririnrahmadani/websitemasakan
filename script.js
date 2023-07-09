// Contoh data resep
const appetizerRecipes = [
    {
    
        title: 'Sayur Asem',
        image: '/img/sayurasem.jpg',
        description: 'Sayur Asem adalah hidangan tradisional Indonesia yang terkenal dan populer. Ini adalah sup asam yang terbuat dari campuran berbagai sayuran segar seperti kacang panjang, jagung manis, daun melinjo, labu siam, terong, dan daun kemangi.',
        recipeLink: 'resepsayurasem.html'
    },
    {
    
        title: 'Lodeh',
        image: '/img/lodeh.jpg',
        description: 'Sayur Lodeh adalah hidangan tradisional Indonesia yang terdiri dari sayuran-sayuran yang dimasak dalam kuah santan kental yang kaya akan rempah-rempah. Beberapa sayuran yang umum digunakan dalam Sayur Lodeh antara lain labu siam, daun melinjo, kacang panjang, tauge, wortel, daun ubi, dan daun pepaya. ',
        recipeLink: 'reseplodeh.html'
    },
    {
    
        title: 'Gulai Nangka',
        image: '/img/nangka.jpg',
        description: 'Gulai Nangka adalah hidangan tradisional Indonesia yang menggunakan nangka muda sebagai bahan utama. Nangka muda yang dipotong-potong dimasak dalam kuah santan kental yang kaya rempah. ',
        recipeLink: 'resepgulainangka.html'
    },
    {
    
        title: 'Tumis Buncis Telur',
        image: '/img/buncistelur.jpg',
        description: 'Tumis buncis telur adalah sebuah hidangan masakan yang terbuat dari buncis yang diiris dan ditumis bersama telur. Biasanya, buncis segar dibersihkan dan dipotong-potong menjadi bagian kecil sebelum ditumis.',
        recipeLink: 'resepbuncistelur.html'
    },
    {
        title: 'Tumis Kangkung Terasi',
        image: '/img/kangkung.jpg',
        description: 'Tumis kangkung adalah salah satu hidangan masakan Asia Tenggara yang terbuat dari kangkung yang dicincang dan ditumis dengan bumbu-bumbu tertentu.',
        recipeLink: 'reseptumiskangkung.html'
    },
    {
        title: 'Tumis Genjer',
        image: '/img/genjer.jpg',
        description: 'Tumis genjer adalah hidangan tumisan yang terbuat dari tumbuhan bernama genjer (Limnocharis flava). Genjer adalah sejenis tanaman air yang sering ditemukan di daerah rawa atau persawahan di Indonesia.',
        recipeLink: 'reseptumisgenjer.html'
    },
    {
        title: 'Cah Brokoli Sosis',
        image: '/img/brokoli.jpg',
        description: 'Cah brokoli sosis adalah hidangan tumis yang terdiri dari brokoli dan sosis yang dimasak bersama dengan bumbu dan saus. "Cah" dalam bahasa Indonesia berarti "tumis", sehingga cah brokoli sosis mengacu pada brokoli dan sosis yang ditumis bersama.',
        recipeLink: 'resepcahbrokoli.html' 
    },
    {
        title: 'Sawi Kuah Bening',
        image: '/img/sawi.jpg',
        description: 'Sawi kuah bening adalah hidangan sup yang terbuat dari sayuran sawi hijau (Brassica juncea) yang dimasak dalam kuah bening. Sawi hijau mengandung berbagai nutrisi seperti vitamin A, vitamin C, dan serat.',
        recipeLink: 'resepsawikuahbening.html'
    },
    {
        title: 'Bening Bayam Jagung',
        image: '/img/bayam.jpg',
        description: 'Bening bayam jagung adalah hidangan sup yang terbuat dari campuran bayam dan jagung dalam kuah bening. Hidangan ini populer di Indonesia dan sering dijadikan sebagai hidangan sehari-hari.',
        recipeLink: 'resepbeningbayam.html'
    },
    {
        title: 'Capcay Bakso',
        image: '/img/capcay.jpg',
        description: 'Capcay bakso adalah hidangan yang merupakan perpaduan antara capcay dan bakso. Capcay adalah hidangan tumis sayuran yang populer di Indonesia, sedangkan bakso adalah bola daging yang terbuat dari daging giling.',
        recipeLink: 'resepcapcaybakso.html'
    },
    {
        title: 'Tumis Kacang Panjang',
        image: '/img/kacang.jpg',
        description: 'Tumis kacang panjang adalah hidangan yang terbuat dari kacang panjang yang diolah dengan cara ditumis dalam minyak panas dengan bumbu dan rempah-rempah tertentu. Kacang panjang adalah jenis sayuran yang memiliki tekstur renyah.',
        recipeLink: 'reseptumiskacangpanjang.html'
    },
    {
        title: 'Sayur Sop Bakso',
        image: '/img/sop.jpg',
        description: 'Sayur sop bakso adalah hidangan sup yang terdiri dari campuran sayuran dan bakso. Kombinasi antara sayuran segar dan bakso yang kenyal serta sup yang lezat menjadikan hidangan ini disukai oleh banyak orang.',
        recipeLink: 'resepsopbakso.html'
    },
];

const mainCourseRecipes = [
    {
        title: 'Ikan Kuah Asam',
        image: '/img/ikanasam.jpg',
        description: 'Ikan kuah asam adalah hidangan ikan yang dimasak dengan kuah asam yang memiliki rasa segar, asam, dan sedikit pedas. Kuah asam ini biasanya terbuat dari campuran bahan seperti asam jawa atau asam keping, air, bumbu-bumbu, serta bahan pelengkap lainnya seperti sayuran atau rempah-rempah. ',
        recipeLink: 'resepikankuahasa.html'
    },
    {
        title: 'Tongkol Suwir Pedas',
        image: '/img/tongkol.jpg',
        description: 'Tongkol suwir pedas adalah hidangan yang terbuat dari ikan tongkol yang dimasak dengan bumbu pedas. Tongkol adalah jenis ikan laut yang memiliki daging yang padat dan berlemak, sehingga cocok untuk diolah menjadi hidangan yang lezat.',
        recipeLink: 'resepikantongkolsuwir.html'
    },
    {
        title: 'Ikan Goreng Bumbu Kuning',
        image: '/img/ikangoreng.jpg',
        description: 'Ikan goreng bumbu kuning adalah hidangan ikan yang digoreng dengan bumbu kuning sebagai bumbu utamanya. Hidangan ini merupakan salah satu hidangan khas Indonesia yang populer.',
        recipeLink: 'resepikangorengkuning.html'
    },
    {
        title: 'Ikan Bawal Steam',
        image: '/img/ikanbawal.jpg',
        description: 'Ikan bawal steam adalah hidangan ikan bawal yang dimasak dengan metode pengukusan. Bawal adalah jenis ikan air tawar yang populer dan sering digunakan dalam berbagai hidangan.',
        recipeLink: 'resepikanbawalsteam.html'
    },
    {
        title: 'Pepes Ikan Mas',
        image: '/img/pepes.jpg',
        description: 'Pepes ikan mas adalah hidangan tradisional Indonesia yang terbuat dari ikan mas yang dibumbui dengan rempah-rempah dan dibungkus dalam daun pisang atau daun pepaya, kemudian dikukus atau dipanggang.',
        recipeLink: 'reseppepepsikan.html'
    },
    {
        title: 'Bandeng Kuah Kemangi',
        image: '/img/bandeng.jpg',
        description: 'Bandeng kuah kuah kemangi adalah hidangan yang terdiri dari ikan bandeng yang dimasak dengan bumbu kuah yang kaya rasa, serta ditambahkan daun kemangi untuk memberikan aroma dan rasa yang khas.',
        recipeLink: 'resepbandeng.html'
    },
    {
        title: 'Tumis Ikan Kembung',
        image: '/img/tumisikan.jpg',
        description: 'Tumis ikan kembung adalah hidangan Indonesia yang terbuat dari ikan kembung yang dipotong-potong dan ditumis dengan bumbu-bumbu serta rempah-rempah. Ikan kembung merupakan jenis ikan laut yang umumnya terdapat di perairan Indonesia.',
        recipeLink: 'resepikankembung.html'
    },
    {
        title: 'Ikan Sambal Bajak',
        image: '/img/ikanbajak.jpg',
        description: 'Ikan sambal bajak adalah hidangan Indonesia yang terdiri dari ikan yang digoreng dan disajikan dengan sambal bajak. Sambal bajak adalah jenis sambal tradisional Indonesia yang terbuat dari bumbu-bumbu yang dihaluskan dan digoreng.',
        recipeLink: 'resepikansambalbjk.html'
    },
    {
        title: 'Tongkol Keumamah Khas Aceh',
        image: '/img/keumamah.jpg',
        description: 'Ikan Tongkol Keumamah adalah variasi dari hidangan Keumamah yang menggunakan ikan tongkol sebagai bahan utamanya. Hidangan ini merupakan hidangan khas Aceh yang terkenal.',
        recipeLink: 'resepikankeumamah.html'
    }
];

const dessertRecipes = [
    {
        title: 'Ayam Pop',
        image: '/img/ayampop.jpg',
        description: 'Ayam Pop Padang adalah variasi hidangan ayam yang berasal dari daerah Padang, Sumatera Barat, Indonesia. Ayam Pop Padang memiliki ciri khas tersendiri dalam hal bumbu dan cara pengolahannya.',
        recipeLink: 'resepayampop.html'
    },
    {
        title: 'Ayam Woku',
        image: '/img/ayamwoku.jpg',
        description: 'Ayam woku adalah hidangan ayam khas dari Manado, Sulawesi Utara, Indonesia. Hidangan ini terdiri dari potongan ayam yang dimasak dengan bumbu woku yang terdiri dari rempah-rempah dan bahan-bahan alami.',
        recipeLink: 'resepayamwoku.html'
    },
    {
        title: 'Ayam Gepuk Sambal Terasi',
        image: '/img/ayamgepuk.jpg',
        description: 'Ayam gepuk sambal terasi adalah hidangan Indonesia yang terdiri dari ayam yang dipukul hingga pipih, kemudian dimasak dengan menggunakan sambal terasi. Hidangan ini memiliki rasa pedas, gurih, dan umumnya sangat nikmat.',
        recipeLink: 'resepayamgepuk.html'
    },
    {
        title: 'Soto Ayam',
        image: '/img/soto.jpg',
        description: 'Soto ayam adalah hidangan sup ayam khas Indonesia yang terkenal dan populer. Hidangan ini biasanya terdiri dari irisan daging ayam, kaldu ayam yang gurih, bumbu-bumbu rempah, dan berbagai bahan pelengkap.',
        recipeLink: 'resepsotoayam.html'
    },
    {
        title: 'Opor Ayam',
        image: '/img/opor.jpg',
        description: 'Opor ayam adalah hidangan Indonesia yang terkenal, terutama pada saat perayaan seperti Idul Fitri atau perayaan lainnya. Hidangan ini terdiri dari potongan daging ayam yang dimasak dalam bumbu kaya rempah, santan, dan rempah-rempah yang khas.',
        recipeLink: 'resepoporayam.html'
    },
    {
        title: 'Ayam Goreng Bawang Putih',
        image: '/img/ayamgoreng.jpg',
        description: 'Ayam goreng bawang putih adalah hidangan ayam goreng yang diberi tambahan bawang putih sebagai bumbu utama. Hidangan ini populer dalam masakan Indonesia dan banyak negara Asia Tenggara lainnya.',
        recipeLink: 'resepayamgorengbawangputih.html'
    },
    {
        title: 'Crispy Popcorn Chicken',
        image: '/img/crispy.jpg',
        description: 'Crispy popcorn chicken adalah hidangan ayam yang terdiri dari potongan-potongan kecil daging ayam yang digoreng dengan kulitnya yang renyah dan garing. Hidangan ini mirip dengan popcorn, sehingga dinamakan "popcorn chicken".',
        recipeLink: 'resepcrispy.html'
    },
    {
        title: 'Semur Ayam Pedas',
        image: '/img/ayamsemur.jpg',
        description: 'Semur ayam pedas adalah hidangan ayam yang dimasak dalam bumbu semur dengan tambahan rasa pedas. Semur adalah masakan Indonesia yang umumnya terbuat dari daging yang dimasak dalam kuah kental dengan campuran bumbu-bumbu seperti bawang merah, bawang putih, kecap manis, kecap asin, gula merah, dan rempah-rempah lainnya.',
        recipeLink: 'resepsemurayam.html'
    },
    {
        title: 'Ayam Goreng Kremes',
        image: '/img/ayamkremes.jpg',
        description: 'Ayam goreng kremes adalah hidangan ayam goreng yang khas dari Indonesia. "Kremes" merujuk pada tekstur renyah dan resepnya melibatkan proses menggoreng ayam hingga kulitnya menjadi kering dan garing.',
        recipeLink: 'resepayamkremes.html'
    }
];

const meatRecipes = [
    {
        title: 'Sapi Lada Hitam',
        image: '/img/sapiladahitam.jpg',
        description: 'Daging sapi lada hitam adalah hidangan daging sapi yang dimasak dengan saus lada hitam. Hidangan ini memiliki rasa pedas dan gurih yang khas. Sapi lada hitam biasanya disajikan panas dengan nasi putih hangat. Beberapa variasi tambahan seperti paprika, bawang bombay, dan sayuran lainnya juga dapat dimasukkan dalam hidangan ini sesuai dengan selera.',
        recipeLink: 'resepsapiladahitam.html'
    },
    {
        title: 'Tongseng Daging Sapi',
        image: '/img/tongsengsapi.jpg',
        description: 'Tongseng daging sapi adalah masakan khas Indonesia yang terbuat dari potongan daging sapi yang dimasak dengan bumbu khas, seperti bawang merah, bawang putih, jahe, serai, cabai, serta rempah-rempah lainnya. Biasanya, daging sapi yang digunakan adalah bagian empuk seperti daging iga atau bagian punggung.',
        recipeLink: 'reseptongsengsapi.html'
    },

    {
        title: 'Rendang Daging',
        image: '/img/rendang.jpg',
        description: 'Rendang daging adalah hidangan tradisional Indonesia yang terkenal dan diakui secara internasional. Hidangan ini terbuat dari daging yang dimasak dalam bumbu rendang yang kaya rempah-rempah dan santan kelapa hingga mencapai kepekatan dan kelezatan yang khas.',
        recipeLink: 'reseprendangdaging.html'
    },
    {
        title: 'Dendeng Balado',
        image: '/img/dendeng.jpg',
        description: 'Dendeng balado adalah hidangan tradisional Indonesia yang terbuat dari irisan tipis daging sapi yang dikeringkan dan dimasak dengan bumbu balado. Dendeng sendiri merujuk pada daging yang dipotong tipis dan dikeringkan hingga menghasilkan tekstur yang kenyal dan renyah.',
        recipeLink: 'resepdendeng.html'
    },
    {
        title: 'Soto Daging Sapi',
        image: '/img/sotodagingsapi.jpg',
        description: 'Soto daging sapi adalah salah satu hidangan khas Indonesia yang terbuat dari daging sapi yang dimasak dalam kuah kaldu yang kaya rasa. Soto daging sapi biasanya disajikan dengan nasi putih dan berbagai pelengkap seperti irisan daun seledri, irisan bawang merah, emping, kerupuk, dan sambal.',
        recipeLink: 'resepsotodaging.html'
    },
    {
        title: 'Oseng Daging Mercon',
        image: '/img/osengdagingmercon.jpg',
        description: 'Oseng daging mercon adalah hidangan Indonesia yang terbuat dari potongan daging sapi yang diolah dengan bumbu-bumbu pedas. Istilah "mercon" dalam bahasa Indonesia berarti "merah menyala" atau "merah terang", yang menggambarkan tingkat kepedasan hidangan ini.',
        recipeLink: 'reseposengdaging.html'
    },
    {
        title: 'Rawon Daging',
        image: '/img/rawondaging.jpg',
        description: 'Rawon adalah hidangan Indonesia yang terkenal, khususnya di daerah Jawa Timur, Surabaya. Rawon adalah semacam sup atau kuah gurih berwarna hitam pekat yang terbuat dari campuran bumbu khas dan bahan utama daging sapi. Hidangan ini memiliki cita rasa kaya, gurih, dan sedikit rempah-rempah.',
        recipeLink: 'reseprawondaging.html'
    },
    {
        title: 'Serundeng Daging Sapi',
        image: '/img/serundeng.jpg',
        description: 'Serundeng daging sapi adalah hidangan Indonesia yang terbuat dari daging sapi yang dipotong menjadi bagian-bagian kecil dan diolah dengan rempah-rempah serta kelapa parut kering. Hidangan ini memiliki tekstur yang kering dan garing, serta memiliki cita rasa yang kaya dan gurih.',
        recipeLink: 'resepserundeng.html'
    },
    {
        title: 'Sop Tulang Sapi',
        image: 'sop.jpg',
        description: 'Sop tulang sapi adalah hidangan sup yang terbuat dari tulang sapi yang direbus bersama dengan berbagai bahan lainnya untuk menciptakan kaldu yang kaya dan lezat. Biasanya, daging pada tulang sapi yang digunakan untuk sop tulang sapi adalah tulang belakang atau tulang rawan yang memiliki sumsum dan kandungan kolagen yang melimpah.',
        recipeLink: 'resepsoptulang.html'
    }
];

// Panggil fungsi untuk membuat konten resep pada bagian HTML yang ditentukan
createRecipeContent(meatRecipes, 'meat-recipes');


// Fungsi untuk membuat konten resep pada bagian HTML yang ditentukan
function createRecipeContent(recipes, containerId) {
    const container = document.getElementById(containerId);
    let content = '';

    recipes.forEach((recipe) => {
        content += `
            <div class="col-lg-4 col-md-6">
                <div class="card">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                        <p class="card-text">${recipe.description}</p>
                        <a href="${recipe.recipeLink}" class="btn btn-primary">View Recipe</a>
                    </div>
                </div>
            </div>
        `;
    });

    

    container.innerHTML = content;
}

// Panggil fungsi untuk membuat konten resep pada masing-masing bagian
createRecipeContent(appetizerRecipes, 'appetizer-recipes');
createRecipeContent(mainCourseRecipes, 'main-course-recipes');
createRecipeContent(dessertRecipes, 'dessert-recipes');
