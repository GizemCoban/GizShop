import React, {Component} from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Steps from './ChatBoxSteps';
const otherFontTheme = {
    background: '#f5f8fb',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

class Chat extends Component {
  constructor(props){ 
    super(props)
    this.state={
      opened:false,
   }
  }
  handleEnd({ steps, values }) {
    // console.log(steps);
     console.log(values);
    if(values[1] == 'iletisim'){
    window.location.href=`/${values[1]}`;

    }else{
    window.location.href=`/urunlerilistele/${values[2]}`;

    }
  }
    render() {
      console.log(this)
      if(this.props.kadin.length>0 && this.props.erkek.length>0 && this.props.cocuk.length>0)
      return (
          <div className="chatBot" >
                 <ThemeProvider theme={otherFontTheme} >
                    <ChatBot handleEnd={this.handleEnd} steps={Steps(this.props.kadin, this.props.erkek, this.props.cocuk)}  floating={true} opened={this.state.opened}
                    toggleFloating={({ opened })=>{ this.setState({ opened });  }} 
                    headerTitle="GizShop Sanal Destek" placeholder="Lütfen Mesajınızı yazınız" />
                </ThemeProvider>
          </div>
     
        );
      else
        return <></>;
    }
  }
export default Chat;