# Données du quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


# Fonction pour poser les questions et vérifier les réponses
def run_quiz(data):
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []  # Liste pour stocker les réponses incorrectes

    for question_data in data:
        question = question_data["question"]
        correct_answer = question_data["answer"]

        # Poser la question à l'utilisateur
        user_answer = input(f"{question}\nVotre réponse : ").strip()

        # Vérifier la réponse
        if user_answer.lower() == correct_answer.lower():
            print("Correct !\n")
            correct_answers += 1
        else:
            print(f"Incorrect. La bonne réponse est : {correct_answer}\n")
            incorrect_answers += 1
            wrong_answers.append({
                "question": question,
                "user_answer": user_answer,
                "correct_answer": correct_answer
            })

    return correct_answers, incorrect_answers, wrong_answers


# Fonction pour afficher les résultats
def show_results(correct_answers, incorrect_answers, wrong_answers):
    print("\n--- Résultats du quiz ---")
    print(f"Réponses correctes : {correct_answers}")
    print(f"Réponses incorrectes : {incorrect_answers}")

    # Bonus : Afficher les réponses incorrectes
    if incorrect_answers > 0:
        print("\n--- Réponses incorrectes ---")
        for wrong in wrong_answers:
            print(f"Question : {wrong['question']}")
            print(f"Votre réponse : {wrong['user_answer']}")
            print(f"Bonne réponse : {wrong['correct_answer']}\n")


# Fonction principale
def main():
    while True:
        # Exécuter le quiz
        correct_answers, incorrect_answers, wrong_answers = run_quiz(data)

        # Afficher les résultats
        show_results(correct_answers, incorrect_answers, wrong_answers)

        # Bonus : Proposer de rejouer si plus de 3 mauvaises réponses
        if incorrect_answers > 3:
            replay = input(
                "Vous avez plus de 3 réponses incorrectes. Voulez-vous rejouer ? (oui/non) : ").strip().lower()
            if replay != "oui":
                print("Merci d'avoir joué ! À bientôt !")
                break
        else:
            print("Merci d'avoir joué ! À bientôt !")
            break


# Démarrer le quiz
main()