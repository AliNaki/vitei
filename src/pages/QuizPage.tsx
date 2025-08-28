import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, Clock, Award, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}
const QuizPage = ()=>{
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [timeLeft, setTimeLeft] = useState(1800);
    const [quizStarted, setQuizStarted] = useState(false);
    const questions: Question[] = [
        {
            id: 1,
            question: "Which Article of the Indian Constitution deals with the Right to Equality?",
            options: [
                "Article 14",
                "Article 19",
                "Article 21",
                "Article 32"
            ],
            correctAnswer: 0,
            explanation: "Article 14 of the Indian Constitution guarantees equality before law and equal protection of laws."
        },
        {
            id: 2,
            question: "The concept of 'Basic Structure' of the Constitution was established in which landmark case?",
            options: [
                "Golaknath vs State of Punjab",
                "Kesavananda Bharati vs State of Kerala",
                "Maneka Gandhi vs Union of India",
                "Minerva Mills vs Union of India"
            ],
            correctAnswer: 1,
            explanation: "The Basic Structure doctrine was established in Kesavananda Bharati vs State of Kerala (1973)."
        },
        {
            id: 3,
            question: "Under which Article can the President of India declare a Financial Emergency?",
            options: [
                "Article 352",
                "Article 356",
                "Article 360",
                "Article 365"
            ],
            correctAnswer: 2,
            explanation: "Article 360 empowers the President to declare a Financial Emergency."
        },
        {
            id: 4,
            question: "The Indian Evidence Act was enacted in which year?",
            options: [
                "1860",
                "1872",
                "1882",
                "1890"
            ],
            correctAnswer: 1,
            explanation: "The Indian Evidence Act was enacted in 1872 and came into force in 1873."
        },
        {
            id: 5,
            question: "Which of the following is NOT a fundamental right under the Indian Constitution?",
            options: [
                "Right to Education",
                "Right to Property",
                "Right to Freedom of Religion",
                "Right to Constitutional Remedies"
            ],
            correctAnswer: 1,
            explanation: "Right to Property was removed as a fundamental right by the 44th Amendment in 1978."
        }
    ];
    useEffect(()=>{
        let timer: NodeJS.Timeout;
        if (quizStarted && timeLeft > 0 && !showResults) {
            timer = setTimeout(()=>setTimeLeft(timeLeft - 1), 1000);
        } else if (timeLeft === 0 && !showResults) {
            handleSubmitQuiz();
        }
        return ()=>clearTimeout(timer);
    }, [
        timeLeft,
        quizStarted,
        showResults
    ]);
    const formatTime = (seconds: number)=>{
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    const handleAnswerSelect = (answerIndex: number)=>{
        const newAnswers = [
            ...selectedAnswers
        ];
        newAnswers[currentQuestion] = answerIndex;
        setSelectedAnswers(newAnswers);
    };
    const handleNextQuestion = ()=>{
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };
    const handlePreviousQuestion = ()=>{
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };
    const handleSubmitQuiz = ()=>{
        setShowResults(true);
    };
    const calculateScore = ()=>{
        let correct = 0;
        questions.forEach((question, index)=>{
            if (selectedAnswers[index] === question.correctAnswer) {
                correct++;
            }
        });
        return correct;
    };
    const getScorePercentage = ()=>{
        return Math.round((calculateScore() / questions.length) * 100);
    };
    const getScoreGrade = ()=>{
        const percentage = getScorePercentage();
        if (percentage >= 90) return {
            grade: "A+",
            color: "text-green-600"
        };
        if (percentage >= 80) return {
            grade: "A",
            color: "text-green-500"
        };
        if (percentage >= 70) return {
            grade: "B",
            color: "text-blue-500"
        };
        if (percentage >= 60) return {
            grade: "C",
            color: "text-yellow-500"
        };
        return {
            grade: "D",
            color: "text-red-500"
        };
    };
    if (!quizStarted) {
        return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6" data-spec-id="quiz-start-page">
        <div className="max-w-2xl mx-auto" data-spec-id="EIr2ZsjIgGr7vvWp">
          <Button variant="outline" onClick={()=>navigate('/')} className="mb-6" data-spec-id="back-to-home">
            <ArrowLeft className="mr-2 h-4 w-4" data-spec-id="BDQKC5V2IWqXyDGg"/>
            Back to Home
          </Button>
          
          <Card data-spec-id="quiz-intro-card">
            <CardHeader className="text-center" data-spec-id="GWu2au1UvuyFsLu2">
              <CardTitle className="text-3xl font-bold text-blue-600" data-spec-id="UeQ8VYBTxmJxfZEz">Constitutional Law Quiz</CardTitle>
              <CardDescription className="text-lg" data-spec-id="sfAc0TQKxo7rqgOw">
                Test your knowledge of Indian Constitutional Law
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6" data-spec-id="GQJRiMrVeOQ65jvF">
              <div className="grid md:grid-cols-3 gap-4 text-center" data-spec-id="zdKA4VbUfWV8WPJP">
                <div className="p-4 bg-blue-50 rounded-lg" data-spec-id="wFOKceFn0pYDEYCZ">
                  <div className="text-2xl font-bold text-blue-600" data-spec-id="ROIXsu4rxo2P2z0N">25</div>
                  <div className="text-sm text-gray-600" data-spec-id="RkFzCL86j0ZfscGi">Questions</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg" data-spec-id="9Svf9jfOA9Q2eeoH">
                  <div className="text-2xl font-bold text-green-600" data-spec-id="WqSlllJLh5jpxrtx">30</div>
                  <div className="text-sm text-gray-600" data-spec-id="zDyPswEGuJHennVz">Minutes</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg" data-spec-id="AQEe4NDHDil9SZik">
                  <div className="text-2xl font-bold text-purple-600" data-spec-id="ub20iJUTYrn4oxvR">Intermediate</div>
                  <div className="text-sm text-gray-600" data-spec-id="aTgscfzoHsU0CiUd">Difficulty</div>
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-gray-600" data-spec-id="9cT4ZPNTlMYFj0BY">
                <h3 className="font-semibold text-gray-800" data-spec-id="Ldd9urSuKHkjahJP">Instructions:</h3>
                <ul className="space-y-2 list-disc list-inside" data-spec-id="qglcALyjkVLBe1kv">
                  <li data-spec-id="ikmR3iY1i8Et236I">You have 30 minutes to complete all 25 questions</li>
                  <li data-spec-id="Z5MC8U8f8csI2Btm">Each question has only one correct answer</li>
                  <li data-spec-id="eaN8JQsqLfhwV3sU">You can navigate between questions using Previous/Next buttons</li>
                  <li data-spec-id="bC4yfPgwF2iV4Kgj">The quiz will auto-submit when time expires</li>
                  <li data-spec-id="e60tHbkzHQsixiAc">You can review your answers before final submission</li>
                </ul>
              </div>
              
              <Button size="lg" className="w-full" onClick={()=>setQuizStarted(true)} data-spec-id="start-quiz-button">
                <Clock className="mr-2 h-5 w-5" data-spec-id="hGP3EYLiOMibl4c6"/>
                Start Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>);
    }
    if (showResults) {
        const score = calculateScore();
        const percentage = getScorePercentage();
        const gradeInfo = getScoreGrade();
        return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6" data-spec-id="quiz-results-page">
        <div className="max-w-4xl mx-auto" data-spec-id="9hOBUkKDtzxs05gb">
          <Card data-spec-id="quiz-results-card">
            <CardHeader className="text-center" data-spec-id="CofvdRwWhe904oao">
              <CardTitle className="text-3xl font-bold" data-spec-id="zoRoTfgkaatNGicl">Quiz Results</CardTitle>
              <CardDescription data-spec-id="2kJjGnLLp7IeI7cU">Constitutional Law Quiz Performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6" data-spec-id="9CW6pFZMtksWEqxK">
              {}
              <div className="text-center space-y-4" data-spec-id="SJHQu7ZUM4T8nPUT">
                <div className="text-6xl font-bold text-blue-600" data-spec-id="1oIkSEraXQqPALxW">{percentage}%</div>
                <div className={`text-2xl font-semibold ${gradeInfo.color}`} data-spec-id="pvQOR9MXQnsjZyoi">
                  Grade: {gradeInfo.grade}
                </div>
                <div className="text-gray-600" data-spec-id="MJsvpURJFVjOpyI8">
                  You got {score} out of {questions.length} questions correct
                </div>
              </div>

              {}
              <div className="space-y-4" data-spec-id="detailed-results">
                <h3 className="text-xl font-semibold" data-spec-id="TrV19vhwq7YDzqT3">Question Review</h3>
                {questions.map((question, index)=>{
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            return (<Card key={question.id} className="border-l-4 border-l-gray-200" data-spec-id="2kHV1yIUcZ7t7ZXZ">
                      <CardContent className="pt-6" data-spec-id="cTwARwSXUxVgKT4H">
                        <div className="flex items-start space-x-3" data-spec-id="7xqjJya65KlZodlC">
                          {isCorrect ? (<CheckCircle className="h-6 w-6 text-green-500 mt-1" data-spec-id="3gOfkN6mBzU8AONf"/>) : (<XCircle className="h-6 w-6 text-red-500 mt-1" data-spec-id="566y7kgybNmixbbs"/>)}
                          <div className="flex-1" data-spec-id="Yf1ZOOFHMt8jtNkF">
                            <p className="font-medium mb-2" data-spec-id="ZodYPxi1eAi58KNE">
                              {index + 1}. {question.question}
                            </p>
                            <div className="space-y-2 text-sm" data-spec-id="WAApm40GMTEgAOyy">
                              <div className="flex flex-wrap gap-2" data-spec-id="xr541bEheBxwGdGF">
                                {question.options.map((option, optionIndex)=>(<Badge key={optionIndex} variant={optionIndex === question.correctAnswer ? "default" : optionIndex === userAnswer && !isCorrect ? "destructive" : "outline"} data-spec-id="eD6p4W1I2W4lPg5P">
                                    {option}
                                  </Badge>))}
                              </div>
                              <p className="text-gray-600 italic" data-spec-id="CbjSVHHLAFHU6Cyr">
                                {question.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>);
        })}
              </div>

              <div className="flex gap-4" data-spec-id="5piR3pizknVlPZVP">
                <Button variant="outline" onClick={()=>navigate('/')} data-spec-id="back-home-button">
                  Back to Home
                </Button>
                <Button onClick={()=>{
            setCurrentQuestion(0);
            setSelectedAnswers([]);
            setShowResults(false);
            setQuizStarted(false);
            setTimeLeft(1800);
        }} data-spec-id="retake-quiz-button">
                  <Award className="mr-2 h-4 w-4" data-spec-id="AVzXZRxMNRGXXZJW"/>
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>);
    }
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6" data-spec-id="quiz-active-page">
      <div className="max-w-4xl mx-auto" data-spec-id="TpLokOWoBM83aaHP">
        {}
        <div className="flex justify-between items-center mb-6" data-spec-id="quiz-header">
          <Button variant="outline" onClick={()=>navigate('/')} data-spec-id="quiz-back-button">
            <ArrowLeft className="mr-2 h-4 w-4" data-spec-id="glHbn6G93IOWnppr"/>
            Exit Quiz
          </Button>
          <div className="flex items-center space-x-4" data-spec-id="ag92i66ak36hPU6X">
            <div className="text-lg font-semibold text-gray-700" data-spec-id="1ptsdQIkW4MJR2xP">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            <div className="flex items-center space-x-2 text-red-600" data-spec-id="6AbPC8yWCnY8djO2">
              <Clock className="h-5 w-5" data-spec-id="lXijDA5gyEkWzaPF"/>
              <span className="font-mono text-lg" data-spec-id="vrHQJ1nAwGlWOzej">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {}
        <div className="mb-6" data-spec-id="quiz-progress">
          <Progress value={progress} className="h-2" data-spec-id="eQiOV9eajJ1LUicY"/>
          <div className="text-sm text-gray-600 mt-1" data-spec-id="U0Uvem2mETxNCVHI">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {}
        <Card data-spec-id="quiz-question-card">
          <CardHeader data-spec-id="CL0rnYIKeVP6YVm4">
            <CardTitle className="text-xl" data-spec-id="1FD7bQQ1pbA2K750">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent data-spec-id="j0bxANNf0260Jwmm">
            <RadioGroup value={selectedAnswers[currentQuestion]?.toString() || ""} onValueChange={(value)=>handleAnswerSelect(parseInt(value))} data-spec-id="quiz-options">
              {questions[currentQuestion].options.map((option, index)=>(<div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50" data-spec-id="P9AVHYMWfgdiTmVm">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} data-spec-id="zurkDaReX5SQrG9U"/>
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer" data-spec-id="9l1BYu6QcYx9VxZO">
                    {option}
                  </Label>
                </div>))}
            </RadioGroup>
          </CardContent>
        </Card>

        {}
        <div className="flex justify-between mt-6" data-spec-id="quiz-navigation">
          <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestion === 0} data-spec-id="previous-question-button">
            Previous
          </Button>
          
          <div className="flex space-x-2" data-spec-id="hYrSEIt3h75BumEL">
            {currentQuestion === questions.length - 1 ? (<Button onClick={handleSubmitQuiz} disabled={selectedAnswers[currentQuestion] === undefined} data-spec-id="submit-quiz-button">
                Submit Quiz
              </Button>) : (<Button onClick={handleNextQuestion} disabled={selectedAnswers[currentQuestion] === undefined} data-spec-id="next-question-button">
                Next
              </Button>)}
          </div>
        </div>

        {}
        <Card className="mt-6" data-spec-id="question-navigation-grid">
          <CardHeader data-spec-id="MXTHwFYWbNIxcaOF">
            <CardTitle className="text-lg" data-spec-id="lCeNn7nMcnQGO3FZ">Question Navigator</CardTitle>
          </CardHeader>
          <CardContent data-spec-id="RrBcCklad6TFjlYX">
            <div className="grid grid-cols-5 gap-2" data-spec-id="DEk5qbkXrrsmM0P6">
              {questions.map((_, index)=>(<Button key={index} variant={index === currentQuestion ? "default" : selectedAnswers[index] !== undefined ? "secondary" : "outline"} size="sm" onClick={()=>setCurrentQuestion(index)} data-spec-id={`question-nav-${index}`}>
                  {index + 1}
                </Button>))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);
};
export default QuizPage;
