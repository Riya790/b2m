/* eslint-disable */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/named */
/* eslint-disable import/first */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import Chip from '@mui/material/Chip'
import FaceIcon from '@mui/icons-material/Face'
// import { useMaterialUIController } from 'context'

import color from '../color'

// renderer
import ColumnHeaderRenderer from './Renderer/columnHeaderRenderer'
import CellRenderer from './Renderer/cellRenderer'

const columns = [
	{
		field: 'id',
		headerName: 'Sl No',
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Sl No" />,
		renderCell: ({ row: { id } }) => <CellRenderer value={id} />,
	},
	{
		field: 'business_code',
		headerName: 'Business Code',
		width: 123,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Business Code" />,
		renderCell: ({ row: { business_code } }) => (
			<CellRenderer value={business_code} />
		),
	},
	{
		field: 'business_name',
		headerName: 'Business Name',
		width: 155,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Business Name" />,
		renderCell: ({ row: { business_name } }) => (
			<CellRenderer value={business_name} />
		),
	},
	{
		field: 'cust_number',
		headerName: 'Customer Number',
		type: 'number',
		width: 143,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Customer Number" />,
		renderCell: ({ row: { cust_number } }) => (
			<CellRenderer value={cust_number} />
		),
	},
	{
		field: 'name_customer',
		headerName: 'Customer Name',
		width: 255,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Customer Name" />,
		renderCell: ({ row: { name_customer } }) => (
			<Chip
				icon={<FaceIcon />}
				label={name_customer}
				color={color[Math.floor(Math.random() * color.length)]}
			/>
		),
	},
	{
		field: 'clear_date',
		headerName: 'Clear Date',
		width: 95,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Clear Date" />,
		renderCell: ({ row: { clear_date } }) => (
			<CellRenderer value={clear_date} />
		),
	},
	{
		field: 'business_year',
		headerName: 'Business Year',
		width: 116.6,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Business Year" />,
		renderCell: ({ row: { business_year } }) => (
			<CellRenderer value={business_year} />
		),
	},
	{
		field: 'doc_id',
		headerName: 'Document ID',
		width: 110,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Document ID" />,
		renderCell: ({ row: { doc_id } }) => <CellRenderer value={doc_id} />,
	},
	{
		field: 'posting_date',
		headerName: 'Posting Date',
		width: 110,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Posting Date" />,
		renderCell: ({ row: { posting_date } }) => (
			<CellRenderer value={posting_date} />
		),
	},
	{
		field: 'document_create_date',
		headerName: 'Document Create Date',
		width: 172.5,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Document Create Date" />,
		renderCell: ({ row: { document_create_date } }) => (
			<CellRenderer value={document_create_date} />
		),
	},
	{
		field: 'due_date',
		headerName: 'Due Date',
		width: 90,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Due Date" />,
		renderCell: ({ row: { due_date } }) => <CellRenderer value={due_date} />,
	},
	{
		field: 'invoice_currency',
		headerName: 'Invoice Currency',
		width: 134,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Invoice Currency" />,
		renderCell: ({ row: { invoice_currency } }) => (
			<CellRenderer value={invoice_currency} />
		),
	},
	{
		field: 'doc_type',
		headerName: 'Document Type',
		width: 126,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Document Type" />,
		renderCell: ({ row: { doc_type } }) => <CellRenderer value={doc_type} />,
	},
	{
		field: 'posting_id',
		headerName: 'Posting ID',
		width: 95,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Document Type" />,
		renderCell: ({ row: { posting_id } }) => (
			<CellRenderer value={posting_id} />
		),
	},
	{
		field: 'total_open_amount',
		headerName: 'Total Open Amount',
		type: 'number',
		width: 148,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Total Open Amount" />,
		renderCell: ({ row: { total_open_amount } }) => (
			<CellRenderer value={total_open_amount} />
		),
	},
	{
		field: 'baseline_create_date',
		headerName: 'Baseline Create Date',
		width: 162,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Baseline Create Date" />,
		renderCell: ({ row: { baseline_create_date } }) => (
			<CellRenderer value={baseline_create_date} />
		),
	},
	{
		field: 'cust_payment_terms',
		headerName: 'Customer Payment Terms',
		width: 200,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Customer Payment Terms" />,
		renderCell: ({ row: { cust_payment_terms } }) => (
			<CellRenderer value={cust_payment_terms} />
		),
	},
	{
		field: 'invoice_id',
		headerName: 'Invoice ID',
		width: 90,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Invoice ID" />,
		renderCell: ({ row: { invoice_id } }) => (
			<CellRenderer value={invoice_id} />
		),
	},
	{
		field: 'is_open',
		headerName: 'Is Open',
		type: 'boolean',
		width: 80,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Is Open" />,
		// renderCell: ({ row: { is_open } }) => <CellRenderer value={is_open} />,
	},
	{
		field: 'predicted',
		headerName: 'Predicted',
		type: 'number',
		width: 120,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		renderHeader: () => <ColumnHeaderRenderer value="Predicted" />,
		renderCell: ({ row: { predicted } }) => <CellRenderer value={predicted} />,
	},
	// {
	// 	field: "fullName",
	// 	headerName: "Full name",
	// 	description: "This column has a value getter and is not sortable.",
	// 	sortable: false,
	// 	width: 160,
	// 	valueGetter: (params) =>
	// 		`${params.row.firstName || ""} ${params.row.lastName || ""}`,
	// },
]

export default columns
