/*
 *
 * (c) Copyright Ascensio System SIA 2010-2019
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at 20A-12 Ernesta Birznieka-Upisha
 * street, Riga, Latvia, EU, LV-1050.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
*/
/**
 *  MatrixSpacingDialog.js
 *
 *  Created by Julia Svinareva on 29/08/19
 *  Copyright (c) 2019 Ascensio System SIA. All rights reserved.
 *
 */

define([
    'common/main/lib/component/Window',
], function () { 'use strict';

    DE.Views.MatrixSpacingDialog = Common.UI.Window.extend(_.extend({
        options: {
            width: 214,
            header: true,
            style: 'min-width: 214px;',
            cls: 'modal-dlg'
        },

        initialize : function(options) {
            _.extend(this.options, {
                title: this.textTitle
            }, options || {});

            this.template = [
                '<div class="box">',
                '<div class="footer center">',
                '<button class="btn normal dlg-btn primary" result="ok" style="margin-right: 10px;">' + this.okButtonText + '</button>',
                '<button class="btn normal dlg-btn" result="cancel">' + this.cancelButtonText + '</button>',
                '</div>'
            ].join('');

            this.options.tpl = _.template(this.template)(this.options);

            Common.UI.Window.prototype.initialize.call(this, this.options);
        },

        render: function() {
            Common.UI.Window.prototype.render.call(this);


            var $window = this.getChild();
            $window.find('.dlg-btn').on('click', _.bind(this.onBtnClick, this));
        },

        _handleInput: function(state) {
            if (this.options.handler) {
                this.options.handler.call(this, this, state);
            }
            this.close();
        },

        onBtnClick: function(event) {
            this._handleInput(event.currentTarget.attributes['result'].value);
        },

        getSettings: function() {
            return this;
        },

        onPrimary: function() {
            this._handleInput('ok');
            return false;
        },

        textTitle: 'Matrix Spacing',
        cancelButtonText: 'Cancel',
        okButtonText:   'Ok',

    }, DE.Views.MatrixSpacingDialog || {}))
});