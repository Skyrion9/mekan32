var express = require('express');
var router = express.Router();

/* GET home page. */
const anaSayfa = function(req, res, next) {
    res.render('mekanlar-liste', {
        'baslik': 'Mekan32 | Anasayfa',
        'footer': 'Mert Kus 2020',
        'sayfaBaslik': {
            'siteAd': 'Mekan 32',
            'aciklama': 'Isparta Civarındaki Mekanları Keşfedin!'
        },
        'mekanlar': [{
                'ad': 'Starbucks',
                'adres': 'Centrum Garden Avm',
                'puan': 3,
                'imkanlar': ['Dunya Kahveleri', 'Kekler', 'Pastalar'],
                'mesafe': '1km'
            },
            {
                'ad': 'Piazza AVM',
                'adres': 'Piazza AVM',
                'puan': 2,
                'imkanlar': ['Magazalar', 'Kafeler', 'Eglence'],
                'mesafe': '1.3km'
            },
            {
                'ad': 'Mavi',
                'adres': 'Mavi Akmansoy Bulvari',
                'puan': 4,
                'imkanlar': ['Pantolon', 'Gomlek', 'Shirt'],
                'mesafe': '15km'
            },
            {
                'ad': 'Kahve Dunyasi',
                'adres': 'Forum AVM',
                'puan': 2,
                'imkanlar': ['Dünya Kahveleri', 'Turk Kahvesi', 'Cappucino'],
                'mesafe': '10km'
            },
            {
                'ad': 'Arcade',
                'adres': 'Piazza AVM',
                'puan': 3,
                'imkanlar': ['Klasik oyunlar', 'Arcade oyunlari', 'Masa tenisi'],
                'mesafe': '1.3km'
            }
        ]
    });
}

const mekanBilgisi = function(req, res, next) {
    res.render('mekan-detay', {
        'baslik': 'Mekan Bilgisi',
        'footer': 'Mert Kus 2020',
        'sayfaBaslik': 'Starbucks',
        'mekanBilgisi': {
            'ad': 'Starbucks',
            'adres': 'Centrum Garden Avm',
            'puan': 3,
            'imkanlar': ['Dunya Kahveleri', 'Kekler', 'Pastalar'],
            'koordinatlar': {
                'enlem': '37.781885',
                'boylam': '30.566034'
            },
            'saatler': [{
                'gunler': 'Pazartesi-Cuma',
                'acilis': '07:00',
                'kapanis': '23:00',
                'kapali': false
            }, {
                'gunler': 'Cumartesi',
                'acilis': '09:00',
                'kapanis': '22:00',
                'kapali': false
            }, {
                'gunler': 'Pazar',
                'kapali': true
            }],
            'yorumlar': [{
                    'yorumYapan': 'Mert Kus',
                    'puan': 5,
                    'tarih': '1.12.2020',
                    'yorumMetni': 'Çok iyi hizmet.'
                }
            ]
        }
    });
}

const yorumEkle = function(req, res, next) {
    res.render('yorum-ekle', {
        title: 'Yorum Ekle',
    });
}


module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}

module.exports.admin = function(req, res, next) {
    res.render('admin', { title: 'Admin' });
};