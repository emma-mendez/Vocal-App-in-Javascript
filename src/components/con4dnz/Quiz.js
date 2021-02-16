import React, { useState } from 'react';
import '../con4dnz/quiz.css';




export default function Quiz() {
	const questions = [
		{
			questionText: 'How do you want to feeltoday?',
			answerOptions: [
				{ answerText: 'Senitive', isChecked: false },
				// { answerText: 'Mood Swings', isCisCheckedorrect: true },
				{ answerText: 'Emotional', isChecked: false },
                // { answerText: 'Irritable', isCorrect: true },
                // { answerText: 'Worried', isCorrect: true },
                // { answerText: 'Confused', isCorrect: true },
                // { answerText: 'Disappointed', isCorrect: true },
                // { answerText: 'Tired', isCorrect: true },
                // { answerText: 'Stressed', isCorrect: true },
                // { answerText: 'Sad', isCorrect: true },
                { answerText: 'Normal', isCorrect: true },
                { answerText: 'Happy', isCorrect: true },
                // { answerText: 'Angry', isCorrect: true },
                // { answerText: 'Panicky', isCorrect: true },
                // { answerText: 'Frisky', isCorrect: true },
                // { answerText: 'Depressed', isCorrect: true },
                { answerText: 'Anxious', isCorrect: false },
                // { answerText: 'Bored', isCorrect: true },
                // { answerText: 'Exicited', isCorrect: true },
                // { answerText: 'Gassed', isCorrect: true },
                { answerText: 'Hopeful', isCorrect: true },
                { answerText: 'Beaming', isCorrect: true },
                // { answerText: 'Loved', isCorrect: true },
                // { answerText: 'Ready', isCorrect: true },
                // { answerText: 'Spiritual', isCorrect: true },
            ],
		},
		{
			questionText: 'Are you ready to take some important strides today?',
			answerOptions: [
				{ answerText: 'Maybe', isCorrect: false },
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'Not yet', isCorrect: false },
				{ answerText: 'About to start', isCorrect: true },
			],
		},
		{
			questionText: 'Do you have your TOP 3 `To Dos` listed out right now??',
			answerOptions: [
				{ answerText: 'About to, right now', isCorrect: true },
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
				{ answerText: 'Thinking about ', isCorrect: false },
			],
		},
		{
			questionText: 'How likely are to make the move you know is needed?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];


const [currentQuestion, setCurrentQuestion] = useState(0);
    

const [score, setScore] = useState(false);


const [showScore, setShowScore] = useState (false);

const handleAnswerButton = (isCorrect, isChecked) => {
    if(isCorrect ===true) {
        setScore(score +1)
    };
    if(isChecked ===true) {
        setScore(score + 1)
    }


    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
};

return (
		<div className='quizapp'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Mood {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOptions)=> 
                        <button
						onClick={handleAnswerButton}>{answerOptions.answerText}</button>
            )}
					</div>
				</>
			)}
		</div>
	);
}