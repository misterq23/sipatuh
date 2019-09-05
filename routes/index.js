const express = require('express');
const router = express.Router();

//firstime
router.get('/', (req, res) => {
  console.log('Request for login recieved');
  res.render('login');
});

//nav_menu
var nav_menu = {
  menu : [{"kode_menu":"110000","nama_menu":"Dashboard","link":"home","icon":"fas fa-fw fa-tachometer-alt"},{"kode_menu":"120000","nama_menu":"Inbox","link":"inbox","icon":"fa fa-inbox"},{"kode_menu":"130000","nama_menu":"Outbox","link":"outbox","icon":"fa fa-paper-plane"},{"kode_menu":"140000","nama_menu":"Pengujian","link":"pengujian","icon":"fa fa-edit"},{"kode_menu":"150000","nama_menu":"Status Pengujian","link":"pengujianhis","icon":"fa fa-history"},{"kode_menu":"160000","nama_menu":"Report","link":"report","icon":"fa fa-print"},{"kode_menu":"170000","nama_menu":"Arsip","link":"arsip","icon":"fa fa-book"}] 
};

router.get('/home', (req, res) => {
  console.log('Request for home recieved LinkMenu');
  res.render('home' ,nav_menu  );
});

router.get('/inbox', (req, res) => {
  console.log('Request for inbox page recieved');
  res.render('inbox', nav_menu); //{user: "Great User",title:"Inbox"});
});

router.get('/inboxdetail', (req, res) => {
  console.log('Request for inboxdetail page recieved');
  res.render('inboxdetail', nav_menu);
});

router.get('/outbox', (req, res) => {
  console.log('Request for outbox page recieved');
  res.render('outbox', nav_menu);
});

router.get('/outboxdetail', (req, res) => {
  console.log('Request for outboxdetail page recieved');
  res.render('outboxdetail', nav_menu);
});

router.get('/pengujian', (req, res) => {
  console.log('Request for pengujian page recieved');
  res.render('pengujian', nav_menu);
});

router.get('/pengujianCreate', (req, res) => {
  console.log('Request for pengujianCreate page recieved');
  res.render('pengujianCreate', nav_menu);
});

router.get('/pengujianhis', (req, res) => {
  console.log('Request for pengujianhis page recieved');
  res.render('pengujianhis', nav_menu);
});

router.get('/report', (req, res) => {
  console.log('Request for report page recieved');
  res.render('report', nav_menu);
});

router.get('/arsip', (req, res) => {
  console.log('Request for arsip page recieved');
  res.render('arsip', nav_menu);
});

router.get('/logout', (req, res) => {
  console.log('Request for login recieved');
  res.render('/');
});

router.get('/err', (req, res) => {
  console.log('404 recieved');
  res.render('404', {user: "Great User",title:"ErrorPage"});
});

module.exports = router;