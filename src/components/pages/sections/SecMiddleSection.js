import React, { useState } from 'react'
import IndexSection from './Components/IndexSection';

const SecMiddleSection = ({ fakeData }) => {

    const [totalResultsYear] = useState([])

    const januaryResults = fakeData.filter(it => it.created.includes('2019-01'));
    const februaryResults = fakeData.filter(it => it.created.includes('2019-02'));
    const marchResults = fakeData.filter(it => it.created.includes('2019-03'));
    const aprilResults = fakeData.filter(it => it.created.includes('2019-04'));

    const totalQuestion = (arr) => {
        const questionsum = arr.reduce((acc, val) => {
            return acc + val.question11
        }, 0)
        return Math.floor(questionsum / arr.length * 100)
    }
    console.log(totalQuestion(januaryResults))
    console.log(januaryResults)

    // January index
    const totalQuestion11 = () => {
        const question11sum = januaryResults.reduce((acc, val) => {
            return acc + val.question11
        }, 0)
        return Math.floor(question11sum / januaryResults.length * 100)
    }
    const totalQuestion12 = () => {
        const question12sum = januaryResults.reduce((acc, val) => {
            return acc + val.question12
        }, 0)
        return Math.floor(question12sum / januaryResults.length * 100)
    }
    const totalQuestion13 = () => {
        const question13sum = januaryResults.reduce((acc, val) => {
            return acc + val.question13
        }, 0)
        return Math.floor(question13sum / januaryResults.length * 100)
    }
    const totalQuestion14 = () => {
        const question14sum = januaryResults.reduce((acc, val) => {
            return acc + val.question14
        }, 0)
        return Math.floor(question14sum / januaryResults.length * 100)
    }
    const totalQuestion15 = () => {
        const question15sum = januaryResults.reduce((acc, val) => {
            return acc + val.question15
        }, 0)
        return Math.floor(question15sum / januaryResults.length * 100)
    }
    const totalQuestion16 = () => {
        const question16sum = januaryResults.reduce((acc, val) => {
            return acc + val.question16
        }, 0)
        return Math.floor(question16sum / januaryResults.length * 100)
    }
    const totalQuestion17 = () => {
        const question17sum = januaryResults.reduce((acc, val) => {
            return acc + val.question17
        }, 0)
        return Math.floor(question17sum / januaryResults.length * 100)
    }
    const totalQuestion18 = () => {
        const question18sum = januaryResults.reduce((acc, val) => {
            return acc + val.question18
        }, 0)
        return Math.floor(question18sum / januaryResults.length * 100)
    }
    const totalQuestion19 = () => {
        const question19sum = januaryResults.reduce((acc, val) => {
            return acc + val.question19
        }, 0)
        return Math.floor(question19sum / januaryResults.length * 100)
    }
    const totalQuestion20 = () => {
        const question20sum = januaryResults.reduce((acc, val) => {
            return acc + val.question20
        }, 0)
        return Math.floor(question20sum / januaryResults.length * 100)
    }

    const totalQuestionnaireJanuary = () => {
        return (totalQuestion11() + totalQuestion12() + totalQuestion13() + totalQuestion14() + totalQuestion15() + totalQuestion16() + totalQuestion17() + totalQuestion18() + totalQuestion19() + totalQuestion20()) / 10
    }

    // February index
    const totalFebQuestion11 = () => {
        const question11sum = februaryResults.reduce((acc, val) => {
            return acc + val.question11
        }, 0)
        return Math.floor(question11sum / februaryResults.length * 100)
    }
    const totalFebQuestion12 = () => {
        const question12sum = februaryResults.reduce((acc, val) => {
            return acc + val.question12
        }, 0)
        return Math.floor(question12sum / februaryResults.length * 100)
    }
    const totalFebQuestion13 = () => {
        const question13sum = februaryResults.reduce((acc, val) => {
            return acc + val.question13
        }, 0)
        return Math.floor(question13sum / februaryResults.length * 100)
    }
    const totalFebQuestion14 = () => {
        const question14sum = februaryResults.reduce((acc, val) => {
            return acc + val.question14
        }, 0)
        return Math.floor(question14sum / februaryResults.length * 100)
    }
    const totalFebQuestion15 = () => {
        const question15sum = februaryResults.reduce((acc, val) => {
            return acc + val.question15
        }, 0)
        return Math.floor(question15sum / februaryResults.length * 100)
    }
    const totalFebQuestion16 = () => {
        const question16sum = februaryResults.reduce((acc, val) => {
            return acc + val.question16
        }, 0)
        return Math.floor(question16sum / februaryResults.length * 100)
    }
    const totalFebQuestion17 = () => {
        const question17sum = februaryResults.reduce((acc, val) => {
            return acc + val.question17
        }, 0)
        return Math.floor(question17sum / februaryResults.length * 100)
    }
    const totalFebQuestion18 = () => {
        const question18sum = februaryResults.reduce((acc, val) => {
            return acc + val.question18
        }, 0)
        return Math.floor(question18sum / februaryResults.length * 100)
    }
    const totalFebQuestion19 = () => {
        const question19sum = februaryResults.reduce((acc, val) => {
            return acc + val.question19
        }, 0)
        return Math.floor(question19sum / februaryResults.length * 100)
    }
    const totalFebQuestion20 = () => {
        const question20sum = februaryResults.reduce((acc, val) => {
            return acc + val.question20
        }, 0)
        return Math.floor(question20sum / februaryResults.length * 100)
    }

    const totalQuestionnaireFebruary = () => {
        return (totalFebQuestion11() + totalFebQuestion12() + totalFebQuestion13() + totalFebQuestion14() + totalFebQuestion15() + totalFebQuestion16() + totalFebQuestion17() + totalFebQuestion18() + totalFebQuestion19() + totalFebQuestion20()) / 10
    }
    console.log(totalQuestionnaireFebruary())
    // March index
    const totalMarQuestion11 = () => {
        const question11sum = marchResults.reduce((acc, val) => {
            return acc + val.question11
        }, 0)
        return Math.floor(question11sum / marchResults.length * 100)
    }
    const totalMarQuestion12 = () => {
        const question12sum = marchResults.reduce((acc, val) => {
            return acc + val.question12
        }, 0)
        return Math.floor(question12sum / marchResults.length * 100)
    }
    const totalMarQuestion13 = () => {
        const question13sum = marchResults.reduce((acc, val) => {
            return acc + val.question13
        }, 0)
        return Math.floor(question13sum / marchResults.length * 100)
    }
    const totalMarQuestion14 = () => {
        const question14sum = marchResults.reduce((acc, val) => {
            return acc + val.question14
        }, 0)
        return Math.floor(question14sum / marchResults.length * 100)
    }
    const totalMarQuestion15 = () => {
        const question15sum = marchResults.reduce((acc, val) => {
            return acc + val.question15
        }, 0)
        return Math.floor(question15sum / marchResults.length * 100)
    }
    const totalMarQuestion16 = () => {
        const question16sum = marchResults.reduce((acc, val) => {
            return acc + val.question16
        }, 0)
        return Math.floor(question16sum / marchResults.length * 100)
    }
    const totalMarQuestion17 = () => {
        const question17sum = marchResults.reduce((acc, val) => {
            return acc + val.question17
        }, 0)
        return Math.floor(question17sum / marchResults.length * 100)
    }
    const totalMarQuestion18 = () => {
        const question18sum = marchResults.reduce((acc, val) => {
            return acc + val.question18
        }, 0)
        return Math.floor(question18sum / marchResults.length * 100)
    }
    const totalMarQuestion19 = () => {
        const question19sum = marchResults.reduce((acc, val) => {
            return acc + val.question19
        }, 0)
        return Math.floor(question19sum / marchResults.length * 100)
    }
    const totalMarQuestion20 = () => {
        const question20sum = marchResults.reduce((acc, val) => {
            return acc + val.question20
        }, 0)
        return Math.floor(question20sum / marchResults.length * 100)
    }

    const totalQuestionnaireMarch = () => {
        return (totalMarQuestion11() + totalMarQuestion12() + totalMarQuestion13() + totalMarQuestion14() + totalMarQuestion15() + totalMarQuestion16() + totalMarQuestion17() + totalMarQuestion18() + totalMarQuestion19() + totalMarQuestion20()) / 10
    }
    console.log(totalQuestionnaireMarch())
    // April index
    const totalAprQuestion11 = () => {
        const question11sum = aprilResults.reduce((acc, val) => {
            return acc + val.question11
        }, 0)
        return Math.floor(question11sum / aprilResults.length * 100)
    }
    const totalAprQuestion12 = () => {
        const question12sum = aprilResults.reduce((acc, val) => {
            return acc + val.question12
        }, 0)
        return Math.floor(question12sum / aprilResults.length * 100)
    }
    const totalAprQuestion13 = () => {
        const question13sum = aprilResults.reduce((acc, val) => {
            return acc + val.question13
        }, 0)
        return Math.floor(question13sum / aprilResults.length * 100)
    }
    const totalAprQuestion14 = () => {
        const question14sum = aprilResults.reduce((acc, val) => {
            return acc + val.question14
        }, 0)
        return Math.floor(question14sum / aprilResults.length * 100)
    }
    const totalAprQuestion15 = () => {
        const question15sum = aprilResults.reduce((acc, val) => {
            return acc + val.question15
        }, 0)
        return Math.floor(question15sum / aprilResults.length * 100)
    }
    const totalAprQuestion16 = () => {
        const question16sum = aprilResults.reduce((acc, val) => {
            return acc + val.question16
        }, 0)
        return Math.floor(question16sum / aprilResults.length * 100)
    }
    const totalAprQuestion17 = () => {
        const question17sum = aprilResults.reduce((acc, val) => {
            return acc + val.question17
        }, 0)
        return Math.floor(question17sum / aprilResults.length * 100)
    }
    const totalAprQuestion18 = () => {
        const question18sum = aprilResults.reduce((acc, val) => {
            return acc + val.question18
        }, 0)
        return Math.floor(question18sum / aprilResults.length * 100)
    }
    const totalAprQuestion19 = () => {
        const question19sum = aprilResults.reduce((acc, val) => {
            return acc + val.question19
        }, 0)
        return Math.floor(question19sum / aprilResults.length * 100)
    }
    const totalAprQuestion20 = () => {
        const question20sum = aprilResults.reduce((acc, val) => {
            return acc + val.question20
        }, 0)
        return Math.floor(question20sum / aprilResults.length * 100)
    }

    const totalQuestionnaireApril = () => {
        return (totalAprQuestion11() + totalAprQuestion12() + totalAprQuestion13() + totalAprQuestion14() + totalAprQuestion15() + totalAprQuestion16() + totalAprQuestion17() + totalAprQuestion18() + totalAprQuestion19() + totalAprQuestion20()) / 10
    }

    // Counting index
    const januaryIndex = () => {
        return 100
    }
    const februaryIndex = () => {
        return Math.floor(totalQuestionnaireJanuary()/totalQuestionnaireFebruary() * 100)
    }
    const marchIndex = () => {
        return Math.floor(totalQuestionnaireJanuary()/totalQuestionnaireMarch() * 100)
    }
    const aprilIndex = () => {
        return Math.floor(totalQuestionnaireJanuary()/totalQuestionnaireApril() * 100)
    }
    
    // Pushing to array
    totalResultsYear.splice(0, 1, januaryIndex())
    totalResultsYear.splice(1, 1, februaryIndex())
    totalResultsYear.splice(2, 1, marchIndex())
    totalResultsYear.splice(3, 1, aprilIndex())
    console.log(totalResultsYear)

    return (
        <div>
            <IndexSection totalResultsYear={totalResultsYear} />
        </div>
    )

}
export default SecMiddleSection