import React, { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

//
// import ReactDOM from 'react-dom';

export const WriteMe = () => {
  const messageRequest = useMessage();
  const { loading, error, request, clearError } = useHttp(); //error
  const [form, setForm] = useState({
    name: "", message: ""
  });

  useEffect(() => {
    messageRequest(error);
    clearError();
  }, [error, messageRequest, clearError])

  // useEffect(() => {
  //   window.M.updateTextFields()
  // }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const writeMeHandler = async () => {
    try {
      const data = await request('/api/message', 'POST', { ...form });
      messageRequest(data.message);
      console.log('Data:', data);
    } catch (e) { }
  }

  const getCSV = async () => {
    try {
      const data = await request('/api/message/getcsv', 'POST', { ...form });
      messageRequest(data.message);
      console.log('getCSV');
      console.log('Data:', data);
    } catch (e) { }
  }

  const getNamesCSV = async () => {
    try {
      const data = await request('/api/message/getdircsv', 'POST', { ...form });
      messageRequest(data.message);
      console.log('getdircsv')
      console.log('Data:', data);
    } catch (e) { }
  }

  // getNamesCSV();



  return (
    <>
      <div>
        <h3 className="page-title white-text">Write to me</h3>
        <div className="container">
          <div className="card  blue darken-1 black-text">
            <div className="card-content white-text">
              <span className="card-title">Отправить мне сообщение</span>
              <div>
                <div className="input-field">
                  <input
                    placeholder="Введите ваше имя"
                    id="name"
                    type="text"
                    name="name"
                    className="yellow-input validate"
                    minLength="3"
                    // // pattern=".{3,500}"
                    maxLength="30"
                    data-length="30"
                    required
                    value={form.name}
                    onChange={changeHandler}
                  />
                  <label htmlFor="name">Ваше имя:</label>
                  <span className="helper-text" data-error="Имя меньше трех символов"></span>
                </div>

                <div className="input-field">
                  <textarea
                    placeholder="Введите Сообщение"
                    id="message"
                    type="text"
                    name="message"
                    className=" yellow-input materialize-textarea validate"
                    minLength="3"
                    // pattern=".{3,500}"
                    // title="5 to 10 characters"
                    maxLength="1000"
                    data-length="1000"
                    required
                    value={form.message}
                    onChange={changeHandler}
                  />
                  <label htmlFor="message" >Ваше сообщение:</label>
                  <span className="helper-text" data-error="Сообщение больше 1000 символов"></span>
                </div>

              </div>
            </div>
            <div className="card-action">
              <button
                // className="btn yellow darken-4"
                className="btn cyan darken-1"
                onClick={writeMeHandler}
                disabled={loading}
              >
                Отправить
                            </button>
            </div>
          </div>

          {/* <footer class="page-footer">
                        <div class="container">
                            <div class="row">
                                <div class="col l6 s12">
                                    <h5 class="white-text">Footer Content</h5>
                                    <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                                </div>
                                <div class="col l4 offset-l2 s12">
                                    <h5 class="white-text">Links</h5>
                                    <ul>
                                        <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                        <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                        <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                        <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="footer-copyright">
                            <div class="container">
                                © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                            </div>
                        </div>
                    </footer> */}



          {/* <div class="footer">
                        <p>Footer</p>
                    </div> */}
        </div>
        <div className="card-action">
          <button
            // className="btn yellow darken-4"
            className="btn cyan darken-1"
            onClick={getCSV}
            disabled={loading}
          >CSV
          </button>
        </div>

        <div className="card-action">
          <button
            // className="btn yellow darken-4"
            className="btn cyan darken-1"
            onClick={getNamesCSV}
            disabled={loading}
          >getNamesCSV
          </button>
        </div>

      </div>

    </>
  )
}
