import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Menu from '../components/Menu'
import MenuItem from '../components/Menu/MenuItem'

class Root extends Component {

    constructor(props, context) {
      super(props, context);

    }

    static propTypes = {

    };

    state = {
        username: '',
        lng: 'EN'
    }

    static contextTypes = {
        username: PropTypes.string,
        localization: PropTypes.object
    }

    static childContextTypes = {
        username: PropTypes.string,
        localization: PropTypes.object
    }

    getChildContext() {
      return {
        username: this.state.username,
        localization : {
          dictionary : {
            "RU" : {
              menu : ['Статьи', 'Фильтры', 'Счетчик', 'Комментарии'],
              menuTitle: 'Выбирите пункт меню:',
              userTitle: "Пользователь",
              formLabelUser: "Пользователь",
              formLabelComment: "Комментарий",
              formLabelBtn: "Отправить",
              commentsTitle: "Пагинация комментариев",
              articleIndexPageTitle: "Выберите статью",
              loaderTitle: "Загрузка..."
            },
            "EN" : {
              menu : ['Articles index"', 'Filters', 'Counter', 'Comments'],
              menuTitle: 'Choose menu item:',
              userTitle: "User",
              formLabelUser: "User",
              formLabelComment: "Commnet",
              formLabelBtn: "Send",
              commentsTitle: "Comments pagination",
              articleIndexPageTitle: "Choose your article",
              loaderTitle: "Loading..."
            }
          },
          checkedLng : this.state.lng
        }
      }
    }

    // componentWillReceiveProps(nextProps) {
    //   console.log('ROUT CONTEXT', this.context.username)
    //   console.log('ROUT LOC', this.context.localization)
    // }

    render() {
        // Как здесь получить контекст ?
        console.log('ROUT CONTEXT', this.context.username) // undefined
        console.log('ROUT LOC', this.context.localization)// undefined

        return (
            <Provider store={store}>
                <div>
                    <ul>
                      <li><a href="RU" onClick={this.handleLngChange} >RU</a></li>
                      <li><a href="EN" onClick={this.handleLngChange} >EN</a></li>
                    </ul>
                    username: <input value = {this.state.username} onChange={this.handleUserChange}/>
                    <Menu>
                        <MenuItem link = "/articles" name="Acricles index"/>
                        <MenuItem link = "/filters" name='Filters'/>
                        <MenuItem link = "/counter" name='Counter'/>
                        <MenuItem link = "/comments/1" name='Comments'/>
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleLngChange = (event) => {
      event.preventDefault()

      this.setState({
        lng : event.target.getAttribute("href")
      })
    }

    handleUserChange = (ev) => {
        this.setState({
            username : ev.target.value
        })
    }
}

export default Root
