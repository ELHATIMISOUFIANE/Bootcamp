class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for l in self.lyrics:
            print(l)

# Créer un objet avec les paroles
stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])

# Appeler la méthode pour afficher les paroles
stairway.sing_me_a_song()