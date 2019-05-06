import React, { useState } from 'react'
import ChartSection2 from './Components/ChartSection2'
import TableSection from './Components/TableSection';

const MiddleSection = ({ results }) => {
  // Set results for every category  
  const [totalResults] = useState([0,0,0,0,0,0,0,0,0,0])
  const [totalAdministrationResults] = useState([0,0,0,0,0,0,0,0,0,0])
  const [totalInvestmentsResults] = useState([0,0,0,0,0,0,0,0,0,0])
  const [totalMarketingResults] = useState([0,0,0,0,0,0,0,0,0,0])
  const [totalOperationsResults] = useState([0,0,0,0,0,0,0,0,0,0])
  const [totalSalesResults] = useState([0,0,0,0,0,0,0,0,0,0])
  
  // Filter results arrays for counting 
  const administrationResults = results.filter(function(administration) {
    return administration.question1 === 'Administration';
  });
  const investmentsResults = results.filter(function(investments) {
    return investments.question1 === 'Investments';
  });
  const marketingResults = results.filter(function(marketing) {
    return marketing.question1 === 'Marketing';
  });
  const operationsResults = results.filter(function(operations) {
    return operations.question1 === 'Operations';
  });
  const salesResults = results.filter(function(sales) {
    return sales.question1 === 'Sales';
  });
  
  // Count total results and push to totalResults array
  const totalQuestion11 = () => {
    const question11sum = results.reduce( (acc, val) => {
      return acc + val.question11   
    },0) 
    return Math.floor(question11sum / results.length * 100)
  }
  const totalQuestion12 = () => {
    const question12sum = results.reduce( (acc, val) => {
      return acc + val.question12   
    },0) 
    return Math.floor(question12sum / results.length * 100)
  }
  const totalQuestion13 = () => {
    const question13sum = results.reduce( (acc, val) => {
      return acc + val.question13   
    },0) 
    return Math.floor(question13sum / results.length * 100)
  }
  const totalQuestion14 = () => {
    const question14sum = results.reduce( (acc, val) => {
      return acc + val.question14   
    },0) 
    return Math.floor(question14sum / results.length * 100)
  }
  const totalQuestion15 = () => {
    const question15sum = results.reduce( (acc, val) => {
      return acc + val.question15   
    },0) 
    return Math.floor(question15sum / results.length * 100)
  }
  const totalQuestion16 = () => {
    const question16sum = results.reduce( (acc, val) => {
      return acc + val.question16   
    },0) 
    return Math.floor(question16sum / results.length * 100)
  }
  const totalQuestion17 = () => {
    const question17sum = results.reduce( (acc, val) => {
      return acc + val.question17   
    },0) 
    return Math.floor(question17sum / results.length * 100)
  }
  const totalQuestion18 = () => {
    const question18sum = results.reduce( (acc, val) => {
      return acc + val.question18   
    },0) 
    return Math.floor(question18sum / results.length * 100)
  }
  const totalQuestion19 = () => {
    const question19sum = results.reduce( (acc, val) => {
      return acc + val.question19   
    },0) 
    return Math.floor(question19sum / results.length * 100)
  }
  const totalQuestion20 = () => {
    const question20sum = results.reduce( (acc, val) => {
      return acc + val.question20   
    },0) 
    return Math.floor(question20sum / results.length * 100)
  }
  totalResults.splice(0, 1, totalQuestion11())
  totalResults.splice(1, 1, totalQuestion12())
  totalResults.splice(2, 1, totalQuestion13())
  totalResults.splice(3, 1, totalQuestion14())
  totalResults.splice(4, 1, totalQuestion15())
  totalResults.splice(5, 1, totalQuestion16())
  totalResults.splice(6, 1, totalQuestion17())
  totalResults.splice(7, 1, totalQuestion18())
  totalResults.splice(8, 1, totalQuestion19())
  totalResults.splice(9, 1, totalQuestion20())
  
  // Count total results and push to totalAdministrationResults array
  const totalAdminQuestion11 = () => {
    const question11sum = administrationResults.reduce( (acc, val) => {
      return acc + val.question11   
    },0) 
    return Math.floor(question11sum / administrationResults.length * 100)
  }
  const totalAdminQuestion12 = () => {
    const question12sum = administrationResults.reduce( (acc, val) => {
      return acc + val.question12   
    },0) 
    return Math.floor(question12sum / administrationResults.length * 100)
  }
  const totalAdminQuestion13 = () => {
    const question13sum = administrationResults.reduce( (acc, val) => {
      return acc + val.question13   
    },0) 
    return Math.floor(question13sum / administrationResults.length * 100)
  }
  const totalAdminQuestion14 = () => {
    const question14sum = administrationResults.reduce( (acc, val) => {
      return acc + val.question14   
    },0) 
    return Math.floor(question14sum / administrationResults.length * 100)
  }
  const totalAdminQuestion15 = () => {
    const question15sum = administrationResults.reduce( (acc, val) => {
      return acc + val.question15   
    },0) 
    return Math.floor(question15sum / administrationResults.length * 100)
  }
  const totalAdminQuestion16 = () => {
    const question16sum = administrationResults.reduce( (acc, val) => {
      return acc + val.question16   
    },0) 
    return Math.floor(question16sum / administrationResults.length * 100)
  }
  const totalAdminQuestion17 = () => {
    const question17sum = administrationResults.reduce( (acc, val) => {
      return acc + val.question17   
    },0) 
    return Math.floor(question17sum / administrationResults.length * 100)
  }
  const totalAdminQuestion18 = () => {
    const question18sum = administrationResults.reduce( (acc, val) => {
      return acc + val.question18   
    },0) 
    return Math.floor(question18sum / administrationResults.length * 100)
  }
  const totalAdminQuestion19 = () => {
    const question19sum = administrationResults.reduce( (acc, val) => {
      return acc + val.question19   
    },0) 
    return Math.floor(question19sum / administrationResults.length * 100)
  }
  const totalAdminQuestion20 = () => {
    const question20sum = administrationResults.reduce( (acc, val) => {
      return acc + val.question20   
    },0) 
    return Math.floor(question20sum / administrationResults.length * 100)
  }
  
  totalAdministrationResults.splice(0, 1, totalAdminQuestion11())
  totalAdministrationResults.splice(1, 1, totalAdminQuestion12())
  totalAdministrationResults.splice(2, 1, totalAdminQuestion13())
  totalAdministrationResults.splice(3, 1, totalAdminQuestion14())
  totalAdministrationResults.splice(4, 1, totalAdminQuestion15())
  totalAdministrationResults.splice(5, 1, totalAdminQuestion16())
  totalAdministrationResults.splice(6, 1, totalAdminQuestion17())
  totalAdministrationResults.splice(7, 1, totalAdminQuestion18())
  totalAdministrationResults.splice(8, 1, totalAdminQuestion19())
  totalAdministrationResults.splice(9, 1, totalAdminQuestion20())

  // Count total results and push to totalInvestmentsResults array
  const totalInvestmentsQuestion11 = () => {
    const question11sum = investmentsResults.reduce( (acc, val) => {
      return acc + val.question11   
    },0) 
    return Math.floor(question11sum / investmentsResults.length * 100)
  }
  const totalInvestmentsQuestion12 = () => {
    const question12sum = investmentsResults.reduce( (acc, val) => {
      return acc + val.question12   
    },0) 
    return Math.floor(question12sum / investmentsResults.length * 100)
  }
  const totalInvestmentsQuestion13 = () => {
    const question13sum = investmentsResults.reduce( (acc, val) => {
      return acc + val.question13   
    },0) 
    return Math.floor(question13sum / investmentsResults.length * 100)
  }
  const totalInvestmentsQuestion14 = () => {
    const question14sum = investmentsResults.reduce( (acc, val) => {
      return acc + val.question14   
    },0) 
    return Math.floor(question14sum / investmentsResults.length * 100)
  }
  const totalInvestmentsQuestion15 = () => {
    const question15sum = investmentsResults.reduce( (acc, val) => {
      return acc + val.question15   
    },0) 
    return Math.floor(question15sum / investmentsResults.length * 100)
  }
  const totalInvestmentsQuestion16 = () => {
    const question16sum = investmentsResults.reduce( (acc, val) => {
      return acc + val.question16   
    },0) 
    return Math.floor(question16sum / investmentsResults.length * 100)
  }
  const totalInvestmentsQuestion17 = () => {
    const question17sum = investmentsResults.reduce( (acc, val) => {
      return acc + val.question17   
    },0) 
    return Math.floor(question17sum / investmentsResults.length * 100)
  }
  const totalInvestmentsQuestion18 = () => {
    const question18sum = investmentsResults.reduce( (acc, val) => {
      return acc + val.question18   
    },0) 
    return Math.floor(question18sum / investmentsResults.length * 100)
  }
  const totalInvestmentsQuestion19 = () => {
    const question19sum = investmentsResults.reduce( (acc, val) => {
      return acc + val.question19   
    },0) 
    return Math.floor(question19sum / investmentsResults.length * 100)
  }
  const totalInvestmentsQuestion20 = () => {
    const question20sum = investmentsResults.reduce( (acc, val) => {
      return acc + val.question20   
    },0) 
    return Math.floor(question20sum / investmentsResults.length * 100)
  }
  
  
  totalInvestmentsResults.splice(0, 1, totalInvestmentsQuestion11())
  totalInvestmentsResults.splice(1, 1, totalInvestmentsQuestion12())
  totalInvestmentsResults.splice(2, 1, totalInvestmentsQuestion13())
  totalInvestmentsResults.splice(3, 1, totalInvestmentsQuestion14())
  totalInvestmentsResults.splice(4, 1, totalInvestmentsQuestion15())
  totalInvestmentsResults.splice(5, 1, totalInvestmentsQuestion16())
  totalInvestmentsResults.splice(6, 1, totalInvestmentsQuestion17())
  totalInvestmentsResults.splice(7, 1, totalInvestmentsQuestion18())
  totalInvestmentsResults.splice(8, 1, totalInvestmentsQuestion19())
  totalInvestmentsResults.splice(9, 1, totalInvestmentsQuestion20())

  // Count total results and push to totalMarketingResults array
  const totalMarketingQuestion11 = () => {
    const question11sum = marketingResults.reduce( (acc, val) => {
      return acc + val.question11   
    },0) 
    return Math.floor(question11sum / marketingResults.length * 100)
  }
  const totalMarketingQuestion12 = () => {
    const question12sum = marketingResults.reduce( (acc, val) => {
      return acc + val.question12   
    },0) 
    return Math.floor(question12sum / marketingResults.length * 100)
  }
  const totalMarketingQuestion13 = () => {
    const question13sum = marketingResults.reduce( (acc, val) => {
      return acc + val.question13   
    },0) 
    return Math.floor(question13sum / marketingResults.length * 100)
  }
  const totalMarketingQuestion14 = () => {
    const question14sum = marketingResults.reduce( (acc, val) => {
      return acc + val.question14   
    },0) 
    return Math.floor(question14sum / marketingResults.length * 100)
  }
  const totalMarketingQuestion15 = () => {
    const question15sum = marketingResults.reduce( (acc, val) => {
      return acc + val.question15   
    },0) 
    return Math.floor(question15sum / marketingResults.length * 100)
  }
  const totalMarketingQuestion16 = () => {
    const question16sum = marketingResults.reduce( (acc, val) => {
      return acc + val.question16   
    },0) 
    return Math.floor(question16sum / marketingResults.length * 100)
  }
  const totalMarketingQuestion17 = () => {
    const question17sum = marketingResults.reduce( (acc, val) => {
      return acc + val.question17   
    },0) 
    return Math.floor(question17sum / marketingResults.length * 100)
  }
  const totalMarketingQuestion18 = () => {
    const question18sum = marketingResults.reduce( (acc, val) => {
      return acc + val.question18   
    },0) 
    return Math.floor(question18sum / marketingResults.length * 100)
  }
  const totalMarketingQuestion19 = () => {
    const question19sum = marketingResults.reduce( (acc, val) => {
      return acc + val.question19   
    },0) 
    return Math.floor(question19sum / marketingResults.length * 100)
  }
  const totalMarketingQuestion20 = () => {
    const question20sum = marketingResults.reduce( (acc, val) => {
      return acc + val.question20   
    },0) 
    return Math.floor(question20sum / marketingResults.length * 100)
  }
  
  totalMarketingResults.splice(0, 1, totalMarketingQuestion11())
  totalMarketingResults.splice(1, 1, totalMarketingQuestion12())
  totalMarketingResults.splice(2, 1, totalMarketingQuestion13())
  totalMarketingResults.splice(3, 1, totalMarketingQuestion14())
  totalMarketingResults.splice(4, 1, totalMarketingQuestion15())
  totalMarketingResults.splice(5, 1, totalMarketingQuestion16())
  totalMarketingResults.splice(6, 1, totalMarketingQuestion17())
  totalMarketingResults.splice(7, 1, totalMarketingQuestion18())
  totalMarketingResults.splice(8, 1, totalMarketingQuestion19())
  totalMarketingResults.splice(9, 1, totalMarketingQuestion20())

  // Count total results and push to totalOperationsResults array
  const totalOperationsQuestion11 = () => {
    const question11sum = operationsResults.reduce( (acc, val) => {
      return acc + val.question11   
    },0) 
    return Math.floor(question11sum / operationsResults.length * 100)
  }
  const totalOperationsQuestion12 = () => {
    const question12sum = operationsResults.reduce( (acc, val) => {
      return acc + val.question12   
    },0) 
    return Math.floor(question12sum / operationsResults.length * 100)
  }
  const totalOperationsQuestion13 = () => {
    const question13sum = operationsResults.reduce( (acc, val) => {
      return acc + val.question13   
    },0) 
    return Math.floor(question13sum / operationsResults.length * 100)
  }
  const totalOperationsQuestion14 = () => {
    const question14sum = operationsResults.reduce( (acc, val) => {
      return acc + val.question14   
    },0) 
    return Math.floor(question14sum / operationsResults.length * 100)
  }
  const totalOperationsQuestion15 = () => {
    const question15sum = operationsResults.reduce( (acc, val) => {
      return acc + val.question15   
    },0) 
    return Math.floor(question15sum / operationsResults.length * 100)
  }
  const totalOperationsQuestion16 = () => {
    const question16sum = operationsResults.reduce( (acc, val) => {
      return acc + val.question16   
    },0) 
    return Math.floor(question16sum / operationsResults.length * 100)
  }
  const totalOperationsQuestion17 = () => {
    const question17sum = operationsResults.reduce( (acc, val) => {
      return acc + val.question17   
    },0) 
    return Math.floor(question17sum / operationsResults.length * 100)
  }
  const totalOperationsQuestion18 = () => {
    const question18sum = operationsResults.reduce( (acc, val) => {
      return acc + val.question18   
    },0) 
    return Math.floor(question18sum / operationsResults.length * 100)
  }
  const totalOperationsQuestion19 = () => {
    const question19sum = operationsResults.reduce( (acc, val) => {
      return acc + val.question19   
    },0) 
    return Math.floor(question19sum / operationsResults.length * 100)
  }
  const totalOperationsQuestion20 = () => {
    const question20sum = operationsResults.reduce( (acc, val) => {
      return acc + val.question20   
    },0) 
    return Math.floor(question20sum / operationsResults.length * 100)
  }
  
  
  totalOperationsResults.splice(0, 1, totalOperationsQuestion11())
  totalOperationsResults.splice(1, 1, totalOperationsQuestion12())
  totalOperationsResults.splice(2, 1, totalOperationsQuestion13())
  totalOperationsResults.splice(3, 1, totalOperationsQuestion14())
  totalOperationsResults.splice(4, 1, totalOperationsQuestion15())
  totalOperationsResults.splice(5, 1, totalOperationsQuestion16())
  totalOperationsResults.splice(6, 1, totalOperationsQuestion17())
  totalOperationsResults.splice(7, 1, totalOperationsQuestion18())
  totalOperationsResults.splice(8, 1, totalOperationsQuestion19())
  totalOperationsResults.splice(9, 1, totalOperationsQuestion20())

  // Count total results and push to totalSalesResults array
  const totalSalesQuestion11 = () => {
    const question11sum = salesResults.reduce( (acc, val) => {
      return acc + val.question11   
    },0) 
    return Math.floor(question11sum / salesResults.length * 100)
  }
  const totalSalesQuestion12 = () => {
    const question12sum = salesResults.reduce( (acc, val) => {
      return acc + val.question12   
    },0) 
    return Math.floor(question12sum / salesResults.length * 100)
  }
  const totalSalesQuestion13 = () => {
    const question13sum = salesResults.reduce( (acc, val) => {
      return acc + val.question13   
    },0) 
    return Math.floor(question13sum / salesResults.length * 100)
  }
  const totalSalesQuestion14 = () => {
    const question14sum = salesResults.reduce( (acc, val) => {
      return acc + val.question14   
    },0) 
    return Math.floor(question14sum / salesResults.length * 100)
  }
  const totalSalesQuestion15 = () => {
    const question15sum = salesResults.reduce( (acc, val) => {
      return acc + val.question15   
    },0) 
    return Math.floor(question15sum / salesResults.length * 100)
  }
  const totalSalesQuestion16 = () => {
    const question16sum = salesResults.reduce( (acc, val) => {
      return acc + val.question16   
    },0) 
    return Math.floor(question16sum / salesResults.length * 100)
  }
  const totalSalesQuestion17 = () => {
    const question17sum = salesResults.reduce( (acc, val) => {
      return acc + val.question17   
    },0) 
    return Math.floor(question17sum / salesResults.length * 100)
  }
  const totalSalesQuestion18 = () => {
    const question18sum = salesResults.reduce( (acc, val) => {
      return acc + val.question18   
    },0) 
    return Math.floor(question18sum / salesResults.length * 100)
  }
  const totalSalesQuestion19 = () => {
    const question19sum = salesResults.reduce( (acc, val) => {
      return acc + val.question19   
    },0) 
    return Math.floor(question19sum / salesResults.length * 100)
  }
  const totalSalesQuestion20 = () => {
    const question20sum = salesResults.reduce( (acc, val) => {
      return acc + val.question20   
    },0) 
    return Math.floor(question20sum / salesResults.length * 100)
  }
  
  
  totalSalesResults.splice(0, 1, totalSalesQuestion11())
  totalSalesResults.splice(1, 1, totalSalesQuestion12())
  totalSalesResults.splice(2, 1, totalSalesQuestion13())
  totalSalesResults.splice(3, 1, totalSalesQuestion14())
  totalSalesResults.splice(4, 1, totalSalesQuestion15())
  totalSalesResults.splice(5, 1, totalSalesQuestion16())
  totalSalesResults.splice(6, 1, totalSalesQuestion17())
  totalSalesResults.splice(7, 1, totalSalesQuestion18())
  totalSalesResults.splice(8, 1, totalSalesQuestion19())
  totalSalesResults.splice(9, 1, totalSalesQuestion20())
  
return (
        <div>
          <ChartSection2 
                totalResults={totalResults}
                totalAdministrationResults={totalAdministrationResults}
                totalInvestmentsResults={totalInvestmentsResults} 
                totalMarketingResults={totalMarketingResults}
                totalOperationsResults={totalOperationsResults}
                totalSalesResults={totalSalesResults} />
          <TableSection 
                totalResults={totalResults}
                totalAdministrationResults={totalAdministrationResults}
                totalInvestmentsResults={totalInvestmentsResults}
                totalMarketingResults={totalMarketingResults}
                totalOperationsResults={totalOperationsResults}
                totalSalesResults={totalSalesResults} />
        </div>
)

}
export default MiddleSection