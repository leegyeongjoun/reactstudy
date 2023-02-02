import { Component } from 'react';

class EventPractice extends Component {

    state = {
        username: '',
        message:''
    }

    // constructor(props){//바인딩
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    // 메서드 바인딩을 새 메서드를 만들 때 마다 constructor를 수정해야 함으로 transform-class-properties문법을 사용해서 화살표 함수 형태로 메서드를 정의한다.
    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value            
        });
        console.log(e.target.name)
    }
    handleClick =() => {
        alert(this.state.username+': ' +this.state.message);
        this.setState({
            username:'',
            message:''
        });     
    }
    handleKeyPress = (e) => {
        if(e.key==='Enter'){
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text"
                       name="username"
                       placeholder='사용자명'
                       value={this.state.username}
                       onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder='아무거나 입력해 보세요'
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                        // (e)=>{
                        //     this.setState({
                        //         message:e.target.value// 오류를 발생시키지 않고 제대로 입력이 된다면 state에 텍스트를 잘 담은것
                        //     })
                        // }
                    
                />
                <button onClick={
                    this.handleClick
                    // () => {
                    //     alert(this.state.message);
                    //     this.setState({
                    //         message:''
                    //     })
                    // }
                    }>확인</button>
            </div>
        );
    }
}

export default EventPractice;