// ============================================================
// SLEEKLOAD - CONFIG RÉGION NOVA RP "BATTLE READY"
// ============================================================

// Langue
config.language = "french"

// LOGO : on utilise une image custom (logo Pokédex)
config.logo_use_image = true
config.logo_image = "logo.png"
config.logo_text = "RÉGION NOVA RP"
config.logo_servername = false
config.logo_center = true
config.logo_show_info = true

// BACKGROUND
config.background_use_video = true
config.background_video = "red_rays_battle.webm"

// Si tu préfères un background image (mets background_use_video à false) :
config.background_map_based = false
config.background_images = [
    "background1.jpg",
    "background2.jpg",
    "background3.jpg",
]
config.background_images_random_order = true
config.background_images_duration = 5000
config.background_images_fade_duration = 2000

// Overlay sombre Battle Ready
config.background_overlay = true
config.background_darkening = 60

// MUSIQUE 8-bit Pokémon
config.music_enable = true
config.music_show = true
config.music_volume = 30
config.music_gmod_volume = true

// Playlist musicale (les YouTube IDs sont des suggestions, à valider/remplacer)
config.music_playlist = [
    {
        name: "Pokemon Red/Blue - Battle Theme (8-bit)",
        youtube: "https://www.youtube.com/watch?v=GvzS6XQqbKw",
    },
    {
        name: "Pokemon Champion Battle (Chiptune Remix)",
        youtube: "https://www.youtube.com/watch?v=yyDgvgKOdLc",
    },
    {
        name: "Pokemon Gym Leader Battle (8-bit)",
        youtube: "https://www.youtube.com/watch?v=zNWRxFnjkUc",
    },
    {
        name: "Pokemon Trainer Battle (Chiptune)",
        youtube: "https://www.youtube.com/watch?v=DRq2EkWGAjA",
    },
    // Tu peux ajouter des fichiers .ogg locaux ici :
    // {
    //     name: "Mon morceau perso",
    //     file: "ma_musique.ogg",
    // },
]

config.music_random_order = true

// MESSAGES rotatifs Battle Ready
config.messages_enable = true
config.messages_random_order = true
config.messages_delay = 4500
config.messages_fade_duration = 800

config.messages_list = [
    "⚡ BIENVENUE À RÉGION NOVA — PRÉPARE-TOI AU COMBAT ⚡",
    "🏆 Tape /league pour ouvrir le menu de la Ligue Pokémon",
    "💧 Eau bat Feu, Sol et Roche",
    "🐉 Le type Dragon résiste à 4 types : Feu, Eau, Plante et Électrik",
    "🔥 3 victoires d'affilée = +20% ELO bonus",
    "👑 Le rang Elite est limité aux 10 meilleurs dresseurs de Région Nova",
    "🎯 La Master Ball se débloque au rang Maître (2400 ELO)",
    "⏰ Une saison dure 30 jours avant reset",
    "🏟️ Tape /queuebattle pour rejoindre la file de combats classés",
    "❄️ La Glace est faible contre Feu, Combat, Roche et Acier",
    "👻 Les attaques Spectre sont sans effet sur les Pokémon Normal",
    "🔧 L'Acier résiste à 11 types différents",
    "📋 Appuie sur F4 pour ouvrir le menu des jobs Pokémon",
    "🌟 Région Nova RP — Le serveur Pokémon RP de référence",
    "🏅 Les rangs : Rookie → Bronze → Argent → Or → Platine → Diamant → Maître → Elite",
    "📊 /league_setbind pour changer la touche d'ouverture du menu Ligue",
    "🎲 Les attaques de zone touchent plusieurs ennemis simultanément",
    "🎪 Une nouvelle saison est en cours — grimpe les rangs !",
    "🌌 Bienvenue à Région Nova, où chaque combat compte",
]

// Erreurs in-game
config.errors_show_ingame = true
