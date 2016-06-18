import $ from 'jquery';
import config from 'config';
import base64 from 'base-64';

import '@ersinfotech/bootstrap/css/yeti.css';
import './login.css';

$(() => {
  $('#login-form').on('submit', (e) => {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: config.eadmin.baseUrl + '/oauth/signin',
      data: {
        email: $('#email').val(),
        password: $('#password').val(),
        client_id: config.clientId,
      },
      success: (data) => {
        localStorage.access_token = data.access_token;
        if($('#isAutoSignIn').is(':checked')) {
          localStorage.email = $('#email').val();
          localStorage.password = base64.encode($('#password').val());
          localStorage.isAutoSignIn = true;
        }
        const match = window.location.href.match(/\?path=(.*)/);
        if (match) {
          window.location.replace('/#' + match[1]);
        } else {
          window.location.replace('/');
        }
      },
      error: () => {
        $('.error').removeClass('hide');
        setTimeout(() => {
          $('.error').addClass('hide');
        }, 2000);
      },
    });
  });

  $('#password-form').on('submit', (e) => {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: config.eadmin.baseUrl + '/reset',
      data: {
        email: $('#email').val(),
      },
      success: () => {
        $('.success').removeClass('hide');
      },
      error: () => {
        $('.error').removeClass('hide');
        setTimeout(() => {
          $('.error').addClass('hide');
        }, 2000);
      },
    });
  });
});
