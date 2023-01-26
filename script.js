"use strict";

$(document).ready(function () {
  // APi
  let cmpnyApi =
    "https://testingapis.softinn.pk/api/CompanyInfo/GetAllCompanies";

  let x;

  // getting APi
  $.getJSON(cmpnyApi, {
    format: "json",
  })
    .done(function (response) {
      let data = response.Values;

      // displaying data
      const displayData = function () {
        $(".data-table").html(`<tr>
      <th scope="row">1</th>
      <td>Company Id</td>
      <td>${response.Values[`${x}`].companyId}</td>
      </tr>
          <tr>
            <th scope="row">2</th>
            <td>Company Name</td>
            <td>${response.Values[`${x}`].companyName}</td>
          </tr>
      
          <tr>
            <th scope="row">3</th>
            <td>Company Address</td>
            <td>${response.Values[`${x}`].companyAddress}</td>
          </tr>
      
          <tr>
            <th scope="row">4</th>
            <td>No. of Users</td>
            <td>${response.Values[`${x}`].noofUsersAllowed}</td>
          </tr>`);
      };

      // SHOW FIRT DATA
      $(".show-data").click(function () {
        x = 0;

        displayData();

        console.log(data);
        if (x === 0) {
          $(".move-btn").on("click", function () {
            if ($(this).hasClass("next")) {
              if (x < data.length - 1) {
                x++;
                displayData();
                console.log(x);
              }
              // x++;
              // displayData();
              // console.log(x);
            }
            // previous
            else if ($(this).hasClass("previous")) {
              if (x > 0) {
                x--;
                console.log(x);
                displayData();
              }

              // x--;
              // console.log(x);
              // displayData();
            }
          });
        }
      });

      // NEXT BUTTON
    })
    .fail(function () {
      $(".btn").on("click", function () {
        $("#error").html("Fail To Load Data");
        setTimeout(function () {
          $("#error").fadeOut();
        }, 2000);
      });
    });
});
