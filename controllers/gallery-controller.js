/* globals module require */
'use strict';

module.exports = function({ data }) {
    return {
        getTopImages(req, res) {
            data.getTopImages()
            .then(result => {
                return res.send(result);
            });
            // let { city, startDate, endDate } = req.query,
            //     page = req.params.page || DEFAULT_PAGE,
            //     pageSize = PAGE_SIZE;

            // if (page < 1) {
            //     page = DEFAULT_PAGE;
            // }

            // data.getFilteredCars({ city, startDate, endDate, page, pageSize })
            //     .then((cars) => {
            //         let startPage = Math.floor((page - 1) / PAGE_SIZE) * PAGE_SIZE + 1,
            //             endPage = startPage + PAGE_SIZE;

            //         return res.render('search/car', {
            //             result: {
            //                 user: req.user,
            //                 cars: getCarsFieldsProjection(cars),
            //                 startPage,
            //                 endPage,
            //                 currentPage: page,
            //                 city,
            //                 startDate,
            //                 endDate
            //             }
            //         });
            //     });
        }
    };
};