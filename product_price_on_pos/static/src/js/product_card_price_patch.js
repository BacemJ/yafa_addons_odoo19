/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { ProductCard } from "@point_of_sale/app/components/product_card/product_card";

patch(ProductCard.prototype, {
    get productRecord() {
        const pos = this.env.services.pos;
        const id = this.props.productId;
        // same store you use in ProductScreen: this.pos.models["product.product"]
        return pos?.models?.["product.product"]?.get?.(id) || null;
    },

get listPrice() {
    const p = this.productRecord;
    if (!p) return "";

    return this.env.utils
        .formatCurrency(p.lst_price)
        .replace(/\s*Rs\s*$/i, "")   // remove trailing Rs (case-insensitive)
        .trim();
},



});
