// //Class Component

// import React from 'react'

// class ErrorBoundaries extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             hasError:false
//         }
//     }

//     static getDerivedStateFromError(error){
//         return {hasError:true}
//     }

//     componentDidCatch(err,info){
//         //Good for logging the error
//         console.log("Eroo",err,info)
//     }

//     render(){
//         if(this.state.hasError){
//             return <div>Something went wrong</div>
//         }
//         return this.props.children
//     }
// }


// export default ErrorBoundaries



import React from 'react'

class ErrorBoundaries extends React.component{
    constructor(props){
        super(props)
            this.state={hasError:false}
    

    }
    static getStateDerivedFromError(err){
        return {hasError:true}
    }

     componentDidCatch(err){
      ///For monitoring the erro
      //Analytics
      console.log("Error")
    }

    render(){
        if(hasError){
           return <div>Error occured</div>
        }
        else  return this.props.children
    }
}